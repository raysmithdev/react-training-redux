import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

const AddToDo = ({ addTodo }) => (
  <form onSubmit={(e) => {
    e.preventDefault();

    let userInput = e.target.userInput.value;
    addTodo(userInput);
    e.target.userInput.value = '';
  }}>
    <input type="text" name="userInput" />
    <button type="submit">Submit</button>
  </form>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) =>  {
      return dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddToDo)
