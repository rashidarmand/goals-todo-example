import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends Component {
  addItem = (e) => {
    e.preventDefault();
    const name = this.input.value;
    const done = () => this.input.value = '';
    this.props.addGoal(name, done);
  }

  removeItem = (goal) => this.props.deleteGoal(goal);

  render() {
    return (
      <div className='goals'>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={ (input) => this.input = input }
        /> <br/>
        <button onClick={ this.addItem }>Add Goal</button>
  
        <List
          items={ this.props.goals }
          remove={ this.removeItem }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ goals }) => ({ goals });

const mapDispatchToProps = (dispatch) => ({
  addGoal(name, done) {
    dispatch(handleAddGoal(name, done))
  },
  deleteGoal(goal) {
    dispatch(handleDeleteGoal(goal))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);