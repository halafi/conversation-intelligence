// @flow strict
import Sound from 'react-sound';

type SoundReducer = {
  status: string,
  position: number,
};

const INITIAL_STATE: SoundReducer = {
  status: Sound.status.STOPPED,
  position: 0,
};

// actions
const SET_STATUS = 'SET_STATUS';
const SET_POSITION = 'SET_POSITION';

type Action = { type: 'SET_STATUS', status: string } | { type: 'SET_POSITION', position: number };

// action creators
export function setStatus(status: string) {
  return {
    type: SET_STATUS,
    status,
  };
}

export function setPosition(position: number) {
  return {
    type: SET_POSITION,
    position,
  };
}

// reducer
function sound(state: SoundReducer = INITIAL_STATE, action: Action) {
  if (!action.type) {
    return state;
  }
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_POSITION:
      return { ...state, position: action.position };
    default:
      return state;
  }
}

export default sound;
