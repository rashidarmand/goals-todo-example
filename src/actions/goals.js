import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// Action Creators
const addGoal = (goal) => ({
  type: ADD_GOAL,
  goal
});

const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  id
});

// Asynchronus action creators that return functions.
// The functions are able to be invoked before the reducer runs on the action thanks to redux-thunk
export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal));
        alert('An error occurred. Try again.');
      });
  }
};

export function handleAddGoal(name, done) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));
        done();
      })
      .catch(() => alert('There was an error. Try again.'))
  }
}