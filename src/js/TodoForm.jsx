import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { createTodo, deleteTodo, fetchTodo, updateTodo } from './actions';

export default class TodoForm extends Component {
  state = this.initialState;

  get initialState() {
    return {
      todo: '',
      completed: false,
      id: null,
    };
  }

  componentDidMount() {
    const todo = fetchTodo(this.props.match.params.id);

    if (todo) this.setState(todo);
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const todo = {...this.state};

    if (todo.id) {
      updateTodo(todo);
    } else {
      createTodo(todo);
    }

    this.props.history.push('/');
  }

  handleDelete = () => {
    deleteTodo(this.state.id);

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
            <button className={this.state.id ? 'button-success' : 'button-info'} onClick={this.handleSubmit}>
              {this.state.id ? 'Update' : 'Create'}
            </button>
            {this.state.id &&
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