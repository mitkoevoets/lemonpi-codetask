import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from 'app/utils/omit';
import { AdvertisersModel } from 'app/models/AdvertisersModel';
import { AdvertisersActions } from 'app/actions/advertisers';
import { RootState } from 'app/reducers';

const PageWrapper = styled.div`
  //box-sizing: border-box;
  //position: relative;
  //min-height: 100vh;
  //overflow: hidden;
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

  onToggleMenuClick(event: any) {
    this.setState({ layoutMode: 'overlay' });
  }

  render() {
    const {} = this.props;

    return (
      <PageWrapper>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Advertisers</h1>
            <DataTable value={this.props.model.advertisers} paginatorPosition="both" selectionMode="single"
                       header="List of Cars" paginator={true} rows={10}
                       responsive={true} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
              <Column field="vin" header="Vin" sortable={true}/>
              <Column field="year" header="Year" sortable={true}/>
              <Column field="brand" header="Brand" sortable={true}/>
              <Column field="color" header="Color" sortable={true}/>
            </DataTable>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
