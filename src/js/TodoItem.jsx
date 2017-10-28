import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  const { item, handleDelete } = props;

  return (
    <div>
      {item.todo}
      <Link to={`/${item.id}`}>Edit</Link>
      <a onClick={() => handleDelete(item.id)}>Delete</a>
    </div>
  );
};

export default TodoItem;