import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Container extends React.Component<any,any> {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export class Row extends React.Component<any,any> {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}

export interface ItemProps {

};

export class Item extends React.Component<ItemProps, any> {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export class Jumbotron extends React.Component<any, any> {
  render() {
    return (
      <div className="jumbotron">{this.props.children}</div>
    );
  }
}