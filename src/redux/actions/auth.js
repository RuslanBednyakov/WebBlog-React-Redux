import * as Const from '../../constants';
import * as API from '../../api'
import * as Helper  from '../../helpers/Helpers'
import axios from 'axios'

export const signUp = (data) => (dispatch) => {
  console.log('SignUpa', data)
  API.auth.signUp(data)
  .then(data => {
    console.log('Sucssed', data)
    dispatch({
      type: Const.SIGN_UP_SUCCESS,
      data
    })
    dispatch({
      type: Const.USER_SET_TOKEN,
      data
    })
  })
  .catch( err => {
    dispatch({
      type: Const.SHOW_ERROR,
      err
    })
  })
}

export const login  = (data) => (dispatch) => {
  API.auth.login(data)
  .then(data => {
    dispatch({
      type: Const.LOGIN_SUCCESS,
      data
    })
  })
  .catch( err => {
    dispatch({
      type: Const.SHOW_ERROR,
      err
    })
  })
}

export function logout () {
  return {
    type: Const.USER_LOGOUT,
  }
}

export function setUser (data) {

  return {
    type: Const.LOGIN_SUCCESS,
    data,
  }
}

export function setAuthorizationToken (response) {
  console.log('action set token', response)

  if (Helper.empty(response) || Helper.empty(response.token)) {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  } else {
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('token', response.token);
    axios.defaults.headers.common['Authorization'] = response.token
  }
}