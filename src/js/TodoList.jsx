import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchTodos } from './actions';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  state = this.initialState;

  get initialState() {
    return {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState(fetchTodos());
    // fetchTodos()
    // .then(this.setState);
  }

  render() {
    const renderTodo = (item, idx) =>
      <TodoItem
        item={item}
        key={idx}
      />;

    return (
      <div className="todo__list">
        <div className="todo__list-create">
          <Link to="/new">Create New</Link>
        </div>
        <div className="todo__list-items">
          {this.state.todos.map(renderTodo)}
        </div>
      </div>
    );
  }
}