import axios from 'axios';

const baseUrl = 'https://qy7cigwg35.execute-api.us-east-1.amazonaws.com/dev/todos';

export function fetchTodos() {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(handleError);
}

export function fetchTodo(id) {
  return axios.get(`${baseUrl}/${id}`)
    .then(response => response.data)
    .catch(handleError);
}

export function updateTodo(todo) {
  return axios.patch(`${baseUrl}/${todo.todoId}`, todo)
    .then(response => response.data)
    .catch(handleError);
}

export function createTodo(todo) {
  return axios.post(`${baseUrl}`, JSON.stringify(todo))
    .then(response => response.data)
    .catch(handleError);
}

export function deleteTodo(id) {
  return axios.delete(`${baseUrl}/${id}`)
    .catch(handleError);
}

function handleError(err) {
  // eslint-disable-next-line
  console.error(err);
}