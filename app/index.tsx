import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class Hello extends React.Component<any,any>{
  render() {
    return <h1 className="container">Hello World</h1>
  }
}

function attachInitialReactEl() {
  var body = document.getElementsByTagName('body')[0];
  const reactEl = document.createElement('div');

  body.appendChild(reactEl);

  return reactEl;
}

ReactDOM.render(
  <Hello />,
  attachInitialReactEl()
)