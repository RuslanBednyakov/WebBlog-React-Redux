import React, {Component} from 'react';

import User from '../../User'


class FoundUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      newButton: ''
    }

  }

  followUser = (foundUser) => {
    this.props.subscribe({following: foundUser.id})
    this.setState({newButton: 'Unfollow'});
  }

  unfollowUser = (foundUser) => {
      this.props.unsubscribe(foundUser.id)
      this.setState({newButton: 'Follow'});
  }

  createButtonFollow = (foundUser) => {
    const buttonFollow = <button className='search__container_results-list-item_buttons-follow' onClick={() => this.followUser(foundUser, buttonFollow)}>Follow</button>
    return buttonFollow;
  }

  createButtonUnfollow = (foundUser) => {
    const buttonUnfollow = <button className='search__container_results-list-item_buttons-unfollow' onClick={() => this.unfollowUser(foundUser, buttonUnfollow)}>Unfollow</button>
    return buttonUnfollow;
  }

  createButton = (user, foundUser) => {
    let button;
    if(!this.state.newButton){
      if (foundUser.userFollowing[0] && foundUser.userFollowing[0].id === user.user_id) {
        button = this.createButtonUnfollow(foundUser);
      } else {
        button = this.createButtonFollow(foundUser);
      }
    } else {
      (this.state.newButton === 'Follow')? button=this.createButtonFollow(foundUser) : button=this.createButtonUnfollow(foundUser)
    }


    return button
  }


  render(){
    const {user ,foundUser} = this.props;
    return (
      <React.Fragment>
        <User user={foundUser}/>
        <div className='search__container_results-list-item_buttons'>
          {(!user) ? null : this.createButton(user, foundUser)}
        </div>
      </React.Fragment>
    );

  }

}

export default FoundUser;