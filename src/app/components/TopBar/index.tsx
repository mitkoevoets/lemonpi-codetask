import React from 'react';
import classNames from 'classnames';
// @ts-ignore
import cobra_logo from './cobra_logo.png';
// @ts-ignore
import avatar2 from './avatar2.png';

export namespace TopBar {
  export interface Props {
    activeTopbarItem?: string,
    topbarMenuActive?: boolean,
    layoutMode?: string,
    onMenuButtonClick: ((e: any) => void),
    onTopbarItemClick: ((e: any) => void),
    onTopbarMobileMenuButtonClick: ((e: any) => void),
  }
}

export class TopBar extends React.Component<TopBar.Props> {
  //
  // static defaultProps = {
  //   activeTopbarItem: null,
  //   topbarMenuActive: null,
  //   onMenuButtonClick: null,
  //   onTopbarItemClick: null,
  //   onTopbarMobileMenuButtonClick: null,
  //   layoutMode: 'overlay',
  // };
  //
  // static propTypes = {
  //   activeTopbarItem: PropTypes.string,
  //   topbarMenuActive: PropTypes.bool,
  //   onMenuButtonClick: PropTypes.func.isRequired,
  //   onTopbarItemClick: PropTypes.func.isRequired,
  //   onTopbarMobileMenuButtonClick: PropTypes.func.isRequired,
  //   layoutMode: PropTypes.string,
  // };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  onTopbarItemClick(event: any, item: any) {
    if (this.props.onTopbarItemClick) {
      this.props.onTopbarItemClick({
        originalEvent: event,
        item: item,
      });
    }
  }

  render() {
    // let topbarClass = classNames('topbar-menu fadeInDown', { 'topbar-menu-active': this.props.topbarMenuActive });

    return (
      <div className="layout-topbar">

        <button className="p-link menu-btn" onClick={this.props.onMenuButtonClick}>
          <i className="material-icons">&#xE5D2;</i>
        </button>

        <button className="p-link topbar-menu-btn" onClick={this.props.onTopbarMobileMenuButtonClick}>
          <i className="material-icons">&#xE853;</i>
        </button>

        <div className="layout-topbar-menu-wrapper">
          <ul className={'topbar-menu fadeInDown'}>
            <li className={classNames('profile-item', { 'active-topmenuitem': this.props.activeTopbarItem === 'profile' })}>

              <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'profile')}>

              <span className="profile-image-wrapper">
                <img src={avatar2} alt="avatar"/>
              </span>

                <span className="topbar-item-name profile-name">Merel v. Berkenkampen</span>
              </button>
              <ul className="fadeInDown">
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">account_circle</i>
                    <span>Profile</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">verified_user</i>
                    <span>Privacy</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">settings_application</i>
                    <span>Settings</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">exit_to_app</i>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className={classNames({ 'active-topmenuitem': this.props.activeTopbarItem === 'settings' })}>
              <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
                <i className="topbar-icon material-icons">settings</i>
                <span className="topbar-item-name">Settings</span>
              </button>
              <ul className="fadeInDown">
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">palette</i>
                    <span>Change Theme</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">star</i>
                    <span>Favorites</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">lock</i>
                    <span>Lock Screen</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">wallpaper</i>
                    <span>Wallpaper</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className={classNames({ 'active-topmenuitem': this.props.activeTopbarItem === 'messages' })}>
              <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
                <i className="topbar-icon material-icons animated swing">&#xE0C9;</i>
                <span className="topbar-badge animated rubberBand">5</span>
                <span className="topbar-item-name">Messages</span>
              </button>
              <ul className="fadeInDown">
                <li role="menuitem">
                  <button className="topbar-message p-link">
                    <img src="assets/layout/images/avatar1.png" width="35" alt="avatar1"/>
                    <span>Give me a call</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="topbar-message p-link">
                    <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2"/>
                    <span>Sales reports attached</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="topbar-message p-link">
                    <img src="assets/layout/images/avatar3.png" width="35" alt="avatar3"/>
                    <span>About your invoice</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="topbar-message p-link">
                    <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2"/>
                    <span>Meeting today at 10pm</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="topbar-message p-link">
                    <img src="assets/layout/images/avatar4.png" width="35" alt="avatar4"/>
                    <span>Out of office</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className={classNames({ 'active-topmenuitem': this.props.activeTopbarItem === 'notifications' })}>
              <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
                <i className="topbar-icon material-icons">notifications</i>
                <span className="topbar-badge animated rubberBand">4</span>
                <span className="topbar-item-name">Notifications</span>
              </button>
              <ul className="fadeInDown">
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">bug_report</i>
                    <span>Pending tasks</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">event</i>
                    <span>Meeting today at 3pm</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">cloud_download</i>
                    <span>Download documents</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link">
                    <i className="material-icons">flight</i>
                    <span>Book flight</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
