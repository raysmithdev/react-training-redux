let id = 0

const ADD_TODO = 'ADD_TODO'
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: id++,
    text
  }
}

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index
  }
}
