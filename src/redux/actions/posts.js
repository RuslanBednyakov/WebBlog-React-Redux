import * as Const from '../../constants'
import * as API from '../../api';

export const getOwnPosts = (id) => (dispatch) => {
  dispatch({type: Const.GET_POSTS});
  
  API.posts.getOwnPosts(id)
  .then( data => {
    dispatch({
      type: Const.GET_OWN_POSTS_SUCCESS,
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

export const getFriendsPosts = (id) => (dispatch) => {

  API.posts.getFriendsPosts(id)
  .then( data => {
    dispatch({
      type: Const.GET_FRIENDS_POSTS_SUCCESS,
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

export const savePost = (data) => (dispatch) => {

  API.posts.savePost(data)
  .then( data => {
    dispatch({
      type: Const.SAVE_NEW_POST_SUCCESS,
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