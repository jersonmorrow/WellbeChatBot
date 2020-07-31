// import types
import { INPUT_SUCCESS, INPUT_FAIL } from '../actions/types';

// Initial state
const initialState = {
  messages: [],
};

// Switch statement - update state
export default (state = initialState, action) => {
  const { type, payload } = action;
  let { messages } = state;

  switch (type) {
    case INPUT_SUCCESS:
      messages = [...messages, { message: payload, type: 'user' }];
      return {
        ...state,
        messages,
      };
    case INPUT_FAIL:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
