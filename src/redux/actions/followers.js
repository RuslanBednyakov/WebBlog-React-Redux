import * as Consts from '../../constants'
import * as API from '../../api';

export const subscribe = (data) => (dispatch) => {

  API.followers.subscribe(data)
  .then( res => {
    dispatch({
      type: Consts.SUBSCRIBE_SUCCESS,
      data: res.data
    })
  })
  .catch( err => {
    dispatch({
      type: Consts.SHOW_ERROR,
      err
    })
  })
}

export const unsubscribe = (id) => (dispatch) => {

  API.followers.unsubscribe(id)
  .then( res => {
    dispatch({
      type: Consts.UNSUBSCRIBE_SUCCESS,
      data: res.id
    })
  })
  .catch( err => {
    dispatch({
      type: Consts.SHOW_ERROR,
      err
    })
  })
}