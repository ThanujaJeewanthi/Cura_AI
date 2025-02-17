import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from '../types';

export const login = (email, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const register = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
  }
};