import React from 'react';
import { connect } from 'react-redux';

import Posts from '../Posts';
import * as actions from '../../redux/actions';

const MyPosts = (props) => {
  return <Posts {...props} styleClassName='posts-list'/>
}


export default connect(
  (state) => {
    return { 
      posts: state.posts.ownPosts,
      isLoading: state.posts.isLoading,
      userId: state.userSettings.user.user_id
    }
  },
  
  (dispatch) => {
    return {
      getPosts: (id) => dispatch(actions.posts.getOwnPosts(id))
    }
  }
)(MyPosts);