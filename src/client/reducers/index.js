import { combineReducers } from 'redux';

const INITIAL_STATE = {
  position: 0,
};

function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { position: state.position + 1 };
    case 'DECREMENT':
      return { position: state.position - 1 };
    default:
      return state;
  }
}

export default combineReducers({
  counter,
});
