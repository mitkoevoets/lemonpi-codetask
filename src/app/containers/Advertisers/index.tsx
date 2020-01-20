import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils/omit';
import { AdvertisersModel } from 'app/models/AdvertisersModel';
import { Advertiser, AdvertisersActions } from 'app/actions/advertisers';
import { RootState } from 'app/reducers';
import { ProgressBar } from 'primereact/progressbar';
import {Growl} from 'primereact/growl';
import {Button} from 'primereact/button';
import {Messages} from 'primereact/messages';

const PageWrapper = styled.div`
`;

export namespace AdvertisersContainer {
  export interface Props extends RouteComponentProps {
    model: AdvertisersModel;
    actions: AdvertisersActions;
  }
}

@connect(
  (state: RootState) => {
    return {
      model: state.advertisers,
    };
  },
  (dispatch: Dispatch): Pick<AdvertisersContainer.Props, 'actions'> => ({
    actions: bindActionCreators(omit(AdvertisersActions, 'Type'), dispatch),
  }),
)
export class AdvertisersContainer extends React.Component<AdvertisersContainer.Props> {
  messages: any;
  growl: any;

  constructor(props: AdvertisersContainer.Props) {
    super(props);

    this.showError = this.showError.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;

    actions.init();
  }

  showError() {
    const msg = {severity: 'error', summary: 'Error Message', detail: 'Validation failed'};
    this.growl.show(msg);
    this.messages.show(msg);
  }

  dataTable() {
    const { model } = this.props;

    if (model.loading) {
      return (<ProgressBar mode="indeterminate"/>);
    }

    const dateSortFunction = (e: any) => {
      return [...model.advertisers].sort(
        (advertiserA: Advertiser, advertiserB: Advertiser): number => {
          let result: number = 0;

          if (advertiserA.createdAtUNIX > advertiserB.createdAtUNIX) {
            result = 1;
          }
          if (advertiserA.createdAtUNIX < advertiserB.createdAtUNIX) {
            result = -1;
          }

          return result * e.order;
        },
      );
    };

    return (
      <div>
        <Messages ref={(el) => this.messages = el} style={{marginBottom: '1em'}} />
        <Growl ref={(el) => this.growl = el} style={{marginTop: '75px'}} />

        <DataTable value={model.advertisers} paginatorPosition="both" selectionMode="single"
                   header="List of Cars" paginator={true} rows={10}
                   responsive={true}
                   onSelectionChange={(event) => this.setState({ dataTableSelection: event.value })}>
          <Column field="name" header="Advertiser" sortable={true}/>
          <Column field="createdAt" header="Creation Date" sortable={true} sortFunction={dateSortFunction}/>
          <Column field="campaigns" header="# Campaigns" sortable={true}/>
          <Column field="impressions" header="Impressions" sortable={true}/>
          <Column field="clicks" header="Clicks" sortable={true}/>
        </DataTable>

        <Button onClick={this.showError} label="Show error demo notification" className="p-button-danger"  style={{width:'10em', marginRight:'.25em', marginTop: '20px'}} />
      </div>
    );
  }

  render() {
    return (
      <PageWrapper>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Advertisers</h1>
            {this.dataTable()}
          </div>
        </div>
      </PageWrapper>
    );
  }
}
