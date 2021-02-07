import { act } from 'react-dom/test-utils';
import { AUTH, LOGOUT } from 'redux/actions/auth/actions';
const authReducer = (state = { authData: {} }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
