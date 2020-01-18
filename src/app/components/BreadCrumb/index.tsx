import React, { FC } from 'react';

export namespace AppBreadcrumb {
  export interface Props {
    location: any
  }
}

export const Breadcrumb: FC<AppBreadcrumb.Props> = (props) => {
  return (
    <div className="layout-breadcrumb">
      <ul>
        <li>
          <button className="p-link"><i className="material-icons">home</i></button>
        </li>
        <li>{props.location.pathname}</li>
      </ul>

      <div className="layout-breadcrumb-options">
        <button className="p-link" title="Logout">
          <i className="material-icons">power_settings_new</i>
        </button>
      </div>
    </div>
  );

};
