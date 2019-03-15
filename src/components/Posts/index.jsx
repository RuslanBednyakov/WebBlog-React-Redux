import React, {Component} from 'react';

import Post from '../Post'


class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
    }

    this.createPosts = this.createPosts.bind(this);
  }

  componentDidMount() {
    const {userId, getPosts} = this.props;
    getPosts(userId);
  }

  createPosts(posts){
    return Array.isArray(posts) ? 
    posts.map( (post) => {
      return ( <Post key={post.id} post={post}/> );
    }) :
    '';
  }


  render(){
    const { posts, isLoading } = this.props;
    if (isLoading) {
      return <div className='posts-loading'>Loading...</div>
    }
    const postsMarkUp = this.createPosts(posts);

    return (
      <ul className={this.props.styleClassName}>
        { postsMarkUp.length ? postsMarkUp : 'There are no posts!' }
      </ul>
    );
  }

}

export default Posts;