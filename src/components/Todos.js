import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';

class Todos extends Component {
  addItem = (e) => {
    e.preventDefault();
    const name = this.input.value;
    const done = () => this.input.value = '';
    this.props.addTodo(name, done);
  }

  removeItem = (todo) => this.props.deleteTodo(todo);

  toggleItem = (id) => this.props.toggleTodo(id);
  
  render() {
    return (
      <div className='todos'>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={ (input) => this.input = input }
        /> <br/>
        <button onClick={ this.addItem }>Add Todo</button>
  
        <List
          toggle={ this.toggleItem }
          items={ this.props.todos }
          remove={ this.removeItem }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
  addTodo(name, done) {
    dispatch(handleAddTodo(name, done));
  },
  deleteTodo(todo) {
    dispatch(handleDeleteTodo(todo));
  },
  toggleTodo(id) {
    dispatch(handleToggleTodo(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);