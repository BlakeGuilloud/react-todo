import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  const { item } = props;

  return (
    <div className="todo__item">
      {item.todo}
      <Link className="todo__item-actions" to={`/${item.id}`}>Edit</Link>
    </div>
  );
};

export default TodoItem;