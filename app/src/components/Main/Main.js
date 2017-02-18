import React, { Component } from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import List from '../List/List';
import './Main.css';

// Stateful component example

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App-Content">
          <AddToDo />
          <List />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
