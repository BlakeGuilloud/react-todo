import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../css/main.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h3>This is my todo list</h3>

          <hr/>

          <Route exact path="/" component={TodoList} />
          <Route path="/:id" component={TodoForm}/>
          {/* <Route path="/about" component={About}/> */}
          {/* <Route path="/topics" component={Topics}/> */}
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
