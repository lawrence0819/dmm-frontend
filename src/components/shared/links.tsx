import * as _ from 'lodash';
import * as React from 'react';
import { ActiveLinkProps, LinkProps, MachineStyleableProps } from './props';

const Router = require('react-router');

export class Link extends React.Component<LinkProps, any>{
  render() {
    return (
      <Router.Link to={this.props.to} className={this.props.className}>
        {this.props.children}
      </Router.Link>
    )
  }
}

export const ActiveLink = React.createClass<ActiveLinkProps, any>({
  render: function(){
    var path:string = _.get(this.props.router, 'location.pathname', '');
    var active:string = path === this.props.to ? 'active' : '';
    return (
      <Link className={`item ${active}`} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
});

export class PullMachineImageLink extends React.Component<MachineStyleableProps, any>{
  render() {
    return (
      <Link
        to={`/machines/${this.props.machineName}/pull-image`}
        className={this.props.className}>
        {this.props.children}
      </Link>
    );
  }
}

export class CreateMachineContainerLink extends React.Component<MachineStyleableProps, any>{
  render() {
    return (
      <Link
        to={`/machines/${this.props.machineName}/create-container`}
        className={this.props.className}>
        {this.props.children}
      </Link>
    );
  }
}