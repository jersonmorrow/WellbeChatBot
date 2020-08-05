// Import Types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  SESSION_SUCCESS,
  SESSION_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
} from './types';

// Import axios
import axios from 'axios';

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
export const createSession = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/watson/session');
    dispatch({ type: SESSION_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: SESSION_FAIL });
    console.log(err);
  }
};

// Sends the message to the bot - API CALL
