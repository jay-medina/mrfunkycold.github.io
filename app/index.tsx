import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component<any,any>{
  render() {
    return <h1>Hello World</h1>
  }
}
var body = document.getElementsByTagName('body')[0];
const reactEl = document.createElement('div');

body.appendChild(reactEl);

ReactDOM.render(
  <Hello />,
  reactEl
)