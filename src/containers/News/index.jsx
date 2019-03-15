import React from 'react';
import { connect } from 'react-redux';

import Posts from '../../components/Posts';
import * as actions from '../../redux/actions';


const News = (props) => {
  return (
    <div className="news__container">
      <Posts {...props} styleClassName='news__container_list'/>
    </div>
  )
}

export default connect(
  (state) => {
    return { 
      posts: state.posts.friendsPosts,
      isLoading: state.posts.isLoading,
      userId: state.userSettings.user.user_id
    }
  },
  (dispatch) => ({
      getPosts: (id) => dispatch(actions.posts.getFriendsPosts(id))
  })
)(News);