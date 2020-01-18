import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import routes from 'app/lib/routes';
import { Breadcrumb } from 'app/components/BreadCrumb';
import { SideBar } from 'app/components/Sidebar';
import { TopBar } from 'app/components/TopBar';
import { withRouter } from 'react-router';
import { AdvertisersContainer, DashboardContainer } from 'app/containers';

const BreadCrumbWithRouter = withRouter(Breadcrumb);

export const App = hot(module)(() => (
  <div className="layout-wrapper">

    <SideBar />
    <div className="layout-main">

      <TopBar layoutMode={'overlay'} onTopbarItemClick={() => {
      }}
              onMenuButtonClick={() => {
              }} onTopbarMobileMenuButtonClick={() => {
      }}
              topbarMenuActive={true}/>
      <BreadCrumbWithRouter />

      <div className="layout-content">
        <Switch>
          <Route exact={true} path={routes.dashboard} component={DashboardContainer}/>
          <Route exact={true} path={routes.advertisers} component={AdvertisersContainer}/>

          <Route render={() => <h1>404 Not Found</h1>}/>
        </Switch>

      </div>
      <GlobalStyle/>
    </div>
  </div>
));
