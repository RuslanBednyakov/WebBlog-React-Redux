import React, {Component} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      errorMessage: '',
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({[e.target.name]: value});
  };

  savePost = () => {
    const { user_id } = this.props;
    const { content, title } = this.state;
    const date = new Date();

    const data = {
      user_id,
      content,
      title,
      date
    }

    if (content && title) {
      this.props.savePost(data);
      this.setState({
        title: '',
        content: ''
      })
    } else {
      this.setState({errorMessage: 'Please enter all fields'})
    }
  }

  render(){
    const {title, content, errorMessage} = this.state;
    return (
        <div className="new-post__container">
          <label className="new-post__container_title-label" htmlFor="title">Title</label>
          <input 
            className="new-post__container_title-input" 
            id="title"
            name="title"
            placeholder="Type title" 
            type="text"
            value={title}
            onChange={this.onChange}
            />
          <label className="new-post__container_content-label" htmlFor="content">Text</label>
          <textarea 
            className="new-post__container_content-textarea" 
            name="content" 
            id="content" 
            cols="30" 
            rows="10"
            onChange={this.onChange}
            value={content}
          />
          <button 
            className="new-post__container_add-post-button"
            onClick={this.savePost}
          >
            Add Post
          </button>
          <div className="user__container_posts-error">{errorMessage}</div>
        </div>
    );

  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.userSettings.user.user_id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    savePost: (data) => {
      dispatch(actions.posts.savePost(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);