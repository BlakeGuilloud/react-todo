const todos = [
  {
    id: 1,
    todo: 'Clean the house',
    completed: false,
  },
  {
    id: 2,
    todo: 'Feed the dogs',
    completed: true,
  }
];

export function fetchTodos() {
  return { todos };
}

export function fetchTodo(id) {
  return todos.find(item => item.id === Number(id));
}

export function updateTodo(todo) {
  console.log('update the todod : ', todo);
  // return axios.patch(`/todos/${todo.id}`);
}

export function createTodo(todo) {
  console.log('create the todo: ', todo);
}

export function deleteTodo(id) {
  console.log('delete this todo : ', id);
}