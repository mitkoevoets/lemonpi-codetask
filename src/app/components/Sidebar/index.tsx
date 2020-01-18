import { ScrollPanel } from 'primereact/scrollpanel';
import { AppMenu } from 'app/components/AppMenu';
import { createMenu } from 'app/containers/Dashboard/menu';
import React from 'react';
import Timeout = NodeJS.Timeout;

export namespace SideBar {
  export interface Props {

  }
}

export class SideBar extends React.Component<SideBar.Props> {
  state = {
    active: false,
  };

  sidebarTimeout: Timeout | undefined;

  constructor(props: SideBar.Props) {
    super(props);

    this.onSidebarMouseEnter = this.onSidebarMouseEnter.bind(this);
    this.onSidebarMouseLeave = this.onSidebarMouseLeave.bind(this);
  }

  onSidebarMouseEnter(event: any) {
    if (this.sidebarTimeout) {
      clearTimeout(this.sidebarTimeout);
    }
    this.setState({ active: true });
  }

  onSidebarMouseLeave(event: any) {
    this.sidebarTimeout = setTimeout(() => {
      this.setState({ active: false });
    }, 125);
  }

  wrapperClassName(active: boolean) {
    if(active) {
      return 'layout-sidebar layout-sidebar-active'
    }

    return 'layout-sidebar';
  }

  render() {
    return (
      <div className={this.wrapperClassName(this.state.active)} onMouseEnter={this.onSidebarMouseEnter}
       onMouseLeave={this.onSidebarMouseLeave}>
        <div className="sidebar-logo">
          <button className="p-link">
          </button>
          <button className="p-link sidebar-anchor" title="Toggle Menu" onClick={() => console.log('click')}></button>
        </div>

        <ScrollPanel style={{ height: '100%' }}>
          <div className="layout-menu-container">
            <AppMenu model={createMenu(this)} layoutMode={'vertical'}/>
          </div>
        </ScrollPanel>
      </div>
    );
  }


}

