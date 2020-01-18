import React from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames';

export namespace AppMenu {
  export interface Props {
    model?: any[];
    layoutMode?: string;
    onRootMenuItemClick?: ((e: any) => void);
    onMenuItemClick?: ((e: any) => void);
    active?: boolean;
  }
}

export class AppMenu extends React.Component<AppMenu.Props> {
  render() {

    return (
      <AppSubmenu items={this.props.model} className="layout-menu" menuActive={this.props.active}
                  onMenuItemClick={this.props.onMenuItemClick} onRootItemClick={this.props.onRootMenuItemClick}
                  root={true} layoutMode={this.props.layoutMode} parentMenuItemActive={true}/>
    );
  }
}

export namespace AppMenu {
  export interface Props {
    className?: string;
    items?: any[];
    onRootItemClick?: ((e: any) => void);
    onMenuItemClick?: ((e: any) => void);
    root?: boolean;
    layoutMode?: string;
    menuActive?: boolean;
    parentMenuItemActive?: boolean;
  }
}

class AppSubmenu extends React.Component<AppMenu.Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onMenuItemClick(event: any, item: any, index: any) {
    //avoid processing disabled items
    if(item.disabled) {
      event.preventDefault();
      return true;
    }

    if(this.props.root && this.props.onRootItemClick) {
      this.props.onRootItemClick({
        originalEvent: event,
        item: item
      });
    }

    //execute command
    if(item.command) {
      item.command({originalEvent: event, item: item});
    }

    // if(index === this.state.activeIndex)
    //   this.setState({activeIndex: null});
    // else
    //   this.setState({activeIndex: index});

    if(this.props.onMenuItemClick) {
      this.props.onMenuItemClick({
        originalEvent: event,
        item: item
      });
    }

    return true;
  }

  onMenuItemMouseEnter(index: number) {
    if(this.props.root && this.props.menuActive && this.isHorizontal()) {
      this.setState({activeIndex: index});
    }
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.parentMenuItemActive === false) {
      return {
        activeIndex: null
      }
    }

    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if(this.isHorizontal() && prevProps.menuActive && !this.props.menuActive) {
      this.setState({activeIndex: null});
    }
  }

  isHorizontal() {
    return false;
    // return (this.props.layoutMode === 'horizontal');
  }

  renderLinkContent(item: any) {
    let submenuIcon = item.items && <i className="material-icons layout-submenu-toggler">keyboard_arrow_down</i>;
    let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

    return (
      <React.Fragment>
        <i className="material-icons">{item.icon}</i>
        <span className="menuitem-text">{item.label}</span>
        {submenuIcon}
        {badge}
      </React.Fragment>
    );
  }

  renderLink(item: any, i: number) {
    let content = this.renderLinkContent(item);

    if (item.to) {
      return (
        <NavLink activeClassName="active-menuitem-routerlink" to={item.to} onClick={(e) => this.onMenuItemClick(e, item, i)} exact
                 target={item.target} onMouseEnter={(e) => this.onMenuItemMouseEnter(i)} className={item.styleClass}>{content}</NavLink>
      )
    }
    else {
      return (
        <a className={classNames("ripplelink",item.styleClass)}  href={item.url} onClick={(e) => this.onMenuItemClick(e, item, i)} target={item.target}
           onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}>
          {content}
        </a>
      );

    }
  }


  render() {
    var items = this.props.items && this.props.items.map((item, i) => {
      // let active = this.state.activeIndex === i;
      let active = false;
      let styleClass = classNames(item.badgeStyleClass, {'active-menuitem': active});

      return <li className={styleClass} key={i}>
        {this.renderLink(item, i)}
        <AppSubmenu items={item.items} onMenuItemClick={this.props.onMenuItemClick} layoutMode={this.props.layoutMode}
                    menuActive={this.props.menuActive} parentMenuItemActive={active}/>
      </li>
    });

    return <ul className={this.props.className}>{items}</ul>;

  }
}
