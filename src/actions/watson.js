// Import Types
import { INPUT_SUCCESS, INPUT_FAIL } from './types';

// Function that handles user message
export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({
      type: INPUT_SUCCESS,
      payload: message,
    });
  } catch (err) {
    dispatch({
      type: INPUT_FAIL,
    });
  }
};

// Creates a session - API Call

// Sends the message to the bot - API CALL
