import * as Const from '../../constants';

const initialState = {
  listUsers: [],
  listFriends: [],
};

const users  = (state = initialState, action) => {
  const {type, data} = action;
  let listFriends;

  switch (type) {

    case Const.GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        listUsers: data
      }

    case Const.GET_LIST_FRIENDS_SUCCESS:
      return {
        ...state,
        listFriends: data
      }

    case Const.CLEAR_INPUT_USERS_LIST:
      return {
        ...state,
        listUsers: []
      }

      case Const.CLEAR_INPUT_FRIENDS_LIST:
      return {
        ...state,
        listFriends: []
      }


    case Const.SUBSCRIBE_SUCCESS:

      listFriends = state.listFriends.map(friend => {
        if(friend.id === data.following) {
          friend.followerid = data.id;
        }
        return {...friend};
      })
      
      return {
        ...state,
        listFriends
      }

    case Const.UNSUBSCRIBE_SUCCESS:

      listFriends = state.listFriends.map(friend => {
        if(friend.id === data) {
          friend.followerid = null;
        }
        return {...friend};
      })
      return {
        ...state,
        listFriends
      }

    default :
      return state
  }
}

export default users;