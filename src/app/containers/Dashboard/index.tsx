import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

const PageWrapper = styled.div`
  //box-sizing: border-box;
  //position: relative;
  //min-height: 100vh;
  //overflow: hidden;
`;

export namespace DashboardContainer {
  export interface Props extends RouteComponentProps {
  }
}

export class DashboardContainer extends React.Component<DashboardContainer.Props> {

  onToggleMenuClick(event: any) {
    this.setState({ layoutMode: 'overlay' });
  }

  render() {
    const {} = this.props;

    return (
      <PageWrapper>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Dashboard</h1>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
