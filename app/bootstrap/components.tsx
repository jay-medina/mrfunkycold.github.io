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

export interface NavbarProps {
  title: string,
  subtitle: string
}

export class Navbar extends React.Component<NavbarProps, any>{
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <div className="title">
                {this.props.title}
                <div className="subtitle">{this.props.subtitle}</div>
              </div>
            </div>
          </div>
          <ul className="nav navbar-nav navbar-right">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}