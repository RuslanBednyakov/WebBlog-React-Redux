import React from 'react';


const Post = (props) => {

  const { post } = props;

  return (
    <li className='posts-list-item'>
      <h3 className='posts-list-item_title'>{post.title}</h3>
      <p className='posts-list-item_content'>{post.content}</p>
      <p className='posts-list-item_footer'>
        <span className='posts-list-item_footer-author'>{post.User && `Author: ${post.User.name}`}</span>
        <span className='posts-list-item_footer-date'>{post.date && `Date: ${post.date}`}</span>
      </p>
    </li>
  );

}

export default Post;