import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Header from './Header';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../css/main.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          <Route exact path="/" component={TodoList} />
          <Route path="/:id" component={TodoForm}/>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
