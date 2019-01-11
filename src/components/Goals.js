import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends Component {
  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    const done = () => this.input.value = ''
    this.props.dispatch(handleAddGoal(name, done))
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={ (input) => this.input = input }
        />
        <button onClick={ this.addItem }>Add Goal</button>
  
        <List
          items={ this.props.goals }
          remove={ this.removeItem }
        />
      </div>
    );
  }
}

export default 
  connect((state) => ({
    goals: state.goals
  }))(Goals);