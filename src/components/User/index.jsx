import React from 'react';


const User = (props) => {

  const { user } = props;
  
  return (
    <div className='user'>
      <div className="user__avatar">{user.avatar}</div>
      <div className="user__info">
        <div className="user__info_name">{user.name}</div>
        <div className="user__info_email">{user.email}</div>
      </div>
    </div>
  );

}


export default User