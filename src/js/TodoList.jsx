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

  handleDelete = (id) => {
    console.log('delete this item', id);
  }

  render() {
    const renderTodo = (item, idx) =>
      <TodoItem
        handleDelete={this.handleDelete}
        item={item}
        key={idx}
      />;

    return (
      <div>
        This is da list
        <br />
        <Link to="/new">Create New</Link>

        {this.state.todos.map(renderTodo)}
      </div>
    );
  }
}