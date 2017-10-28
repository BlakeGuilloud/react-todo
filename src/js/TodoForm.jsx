import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { createTodo, deleteTodo, fetchTodo, updateTodo } from './actions';

export default class TodoForm extends Component {
  state = this.initialState;

  get initialState() {
    return {
      todo: '',
      completed: false,
      todoId: null,
    };
  }

  componentWillMount() {
    if (this.props.match.params.id !== 'new') {
      fetchTodo(this.props.match.params.id)
        .then(data => this.setState(data));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const todo = {...this.state};

    if (todo.todoId) {
      updateTodo(todo);
    } else {
      createTodo(todo);
    }

    this.props.history.push('/');
  }

  handleDelete = () => {
    deleteTodo(this.state.todoId);

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="todo__form">
        <Link className="todo__form-back" to="/">Back</Link>
        <div className="todo__form-content">
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="What would you like todo?"
          />
          <div className="todo__form-actions">
            <button className={this.state.todoId ? 'button-success' : 'button-info'} onClick={this.handleSubmit}>
              {this.state.todoId ? 'Update' : 'Create'}
            </button>
            {this.state.todoId &&
              <button className="button-danger" onClick={this.handleDelete}>
                Delete
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}