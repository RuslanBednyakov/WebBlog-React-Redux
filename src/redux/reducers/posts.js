import * as Const from '../../constants';

const initialState = {
  ownPosts: [],
  friendsPosts: [],
  isLoading: false
};

const posts = (state = initialState, action) => {
  switch (action.type) {

    case Const.GET_POSTS:
      return {
        ...state,
        isLoading: true
      }

    case Const.GET_OWN_POSTS_SUCCESS:
      return {
        ...state,
        ownPosts: action.data,
        isLoading: false
      }
    case Const.GET_FRIENDS_POSTS_SUCCESS:
      return {
        ...state,
        friendsPosts: action.data,
        isLoading: false
      }
    case Const.SAVE_NEW_POST_SUCCESS:
     let ownPosts = state.ownPosts.concat(action.data)
      return {
        ...state,
        ownPosts: ownPosts,
        isLoading: false
      }  
    case Const.DISPLAY_ERROR:
      return {
        ...state,
        isLoading: false
      }

    default :
      return state
  }
}

export default posts;