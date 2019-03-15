import React, {Component} from 'react';

import UserProfile from '../../components/UserProfile'
import MyPosts from '../../components/MyPosts'
import NewPost from '../../components/NewPost'


class MyPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="user__container">
        <UserProfile />
        <div className="user__container_posts">
          <MyPosts />
          <NewPost />
        </div>
      </div>
    );

  }

}

export default MyPage;