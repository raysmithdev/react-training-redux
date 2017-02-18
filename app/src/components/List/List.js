import React from 'react';
import './List.css';
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/index'

// Stateless component example

const List = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <div key={index}>
        <li>
          {todo.text}
          <span>
            <button className="Delete-Button" onClick={() => deleteTodo(index) }>Delete</button>
          </span>
        </li>
      </div>
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (index) =>  {
      return dispatch(deleteTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
