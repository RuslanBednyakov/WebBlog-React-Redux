import * as Const from '../../constants'
import * as API from '../../api';

export const getListUsers = (char) => (dispatch) => {

  dispatch({
    type: Const.CLEAR_INPUT_USERS_LIST
  })

  API.users.getListUsers(char)
  .then( data => {
    dispatch({
      type: Const.GET_LIST_USERS_SUCCESS,
      data: data.users
    })
  })
  .catch( err => {
    dispatch({
      type: Const.SHOW_ERROR,
      err
    })
  })
}

export const getListFriends = (id) => (dispatch) => {

  dispatch({
    type: Const.CLEAR_INPUT_FRIENDS_LIST
  })

  API.users.getListFriends(id)
  .then( data => {
    dispatch({
      type: Const.GET_LIST_FRIENDS_SUCCESS,
      data: data.users
    })
  })
  .catch( err => {
    dispatch({
      type: Const.SHOW_ERROR,
      err
    })
  })
}

export const clearInputUsersList = () => {
  return {
    type: Const.CLEAR_INPUT_USERS_LIST
  }
}

export const clearInputFriendsList = () => {
  return {
    type: Const.CLEAR_INPUT_FRIENDS_LIST
  }
}