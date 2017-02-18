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

const REQUEST_USERS = 'REQUEST_USERS'
const requestUsers = () => {
  return {
    type: REQUEST_USERS
  }
}

const RECIEVE_USERS = 'RECIEVE_USERS'
const recieveUsers= (users) => {
  return {
    type: RECIEVE_USERS,
    users
  }
}

// ASYNC Action
export const fetchUsers = () => dispatch => {
  dispatch(requestUsers())

  fetch('https://randomuser.me/api/?results=5000')
  .then(response => response.json())
  .then(json => dispatch(recieveUsers(json.results)))
  .catch(ex => console.log('parsing failed', ex))

}
