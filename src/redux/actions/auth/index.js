import { AUTH } from './actions';
import * as api from 'api';

export const signin = (formData, history) => async (dispatch) => {
  try {
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
