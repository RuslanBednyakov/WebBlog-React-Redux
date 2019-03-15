import React, {Component} from 'react';
import { connect } from 'react-redux';

import User from '../../components/User'
import * as actions from '../../redux/actions';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  changeButtons = (button, foundUser, name) => {

    let newButton;

    if(name === 'Follow') {
      newButton = this.createButtonFollow(foundUser)
    } else if (name === 'Unfollow') {
      newButton = this.createButtonUnfollow(foundUser)
    }

    button.parentNode.replaceChild(newButton, button)
  }

  followUser = (foundUser, button) => {
    this.props.subscribe(foundUser.id)
    this.changeButtons(button, foundUser, 'Unfollow');
  }

  unfollowUser = (foundUser, button) => {
      this.props.unsubscribe(foundUser.id)
      this.changeButtons(button, foundUser, 'Follow');
  }

  createButtonFollow = (foundUser) => {
    const buttonFollow = <button className='search__container_results-list-item_buttons-follow' onClick={() => this.followUser(foundUser, buttonFollow)}>Follow</button>
    return buttonFollow;
  }

  createButtonUnfollow = (foundUser) => {
    const buttonUnfollow = <button className='search__container_results-list-item_buttons-unfollow' onClick={() => this.unfollowUser(foundUser, buttonUnfollow)}>Unfollow</button>
    return buttonUnfollow;
  }

  createButtons = (foundUser) => {
    const {user} = this.props;
    if (!user) {
      return null;
    }
    let button;
    if (foundUser.userFollowing[0] && foundUser.userFollowing[0].id === this.user.id) {
      button = this.createButtonUnfollow(foundUser);
  } else {
      button = this.createButtonFollow(foundUser);
  }
    return (
      <div className='search__container_results-list-item_buttons'>
        {button}
      </div>
    )
  }

  createRows = () => {
    return this.props.foundUsers.map(foundUser => {
      const buttons = this.createButtons(foundUser);
      return (
        <li key={foundUser.id} className='search__container_results-list-item'>
          <User user={foundUser}/>
          {buttons}
        </li>
      );
    })
  }

  render(){
    const {foundUsers} = this.props;
    const rows = foundUsers ? this.createRows() : null;
    return (
      <div className="search__container">
        <div className="search__container_tittle">
          <h3 className="search__container_tittle-header">Search result: <span className="search__count">{foundUsers.length}</span> users found </h3>
        </div>
        <div className="search__container_results">
          <ul className="search__container_results-list">
            {rows}
          </ul>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    user: state.userSettings,
    foundUsers: state.users.listUsers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    subscribe: (data) => {
      dispatch(actions.followers.subscribe(data))
    },
    unsubscribe: (data) => {
      dispatch(actions.followers.unsubscribe(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);