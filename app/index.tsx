import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Jumbotron, Container, Navbar} from './bootstrap/components.tsx';
import * as Setup from './setup.ts';
import './main.css';

function App() {
  return (
    <div>
      <Navbar title={"Jose Manuel Medina"} subtitle={"Front end developer"}/>
      <Jumbotron>  
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Jumbotron>
      <Container>This is a container</Container>
    </div>
  );
}
ReactDOM.render(
  <App />,
  Setup.attachInitialReactEl()
)