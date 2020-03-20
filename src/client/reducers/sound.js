import Sound from 'react-sound';

const INITIAL_STATE = {
  status: Sound.status.STOPPED,
  position: 0,
};

// actions
const SET_STATUS = 'SET_STATUS';
const SET_POSITION = 'SET_POSITION';

// action creators
export function setStatus(status) {
  return {
    type: SET_STATUS,
    status,
  };
}

export function setPosition(position) {
  return {
    type: SET_POSITION,
    position,
  };
}

// reducer
function sound(state = INITIAL_STATE, action) {
  if (!action.type) {
    return state;
  }
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_POSITION:
      return { ...state, status: action.position };
    default:
      return state;
  }
}

export default sound;
