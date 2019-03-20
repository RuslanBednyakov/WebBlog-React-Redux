import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';


class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    const isAuthenticated = this.props.isAuthenticated;
    
    if(isAuthenticated){
      return  (
        <nav className="container menu">
          <ul className="menu__list">
            <li className="menu__list_item myPage">
              <NavLink to="/my-page" className="menu__list_item-link">My Page</NavLink>
            </li>
            <li className="menu__list_item news">
              <NavLink to="/news" className="menu__list_item-link">News</NavLink>
            </li>
            <li className="menu__list_item myFriends">
              <NavLink to="/friends" className="menu__list_item-link">My Friends</NavLink>
            </li>
            {/* <li className="menu__list_item chat">
              <NavLink to="/chat" className="menu__list_item-link">Chat</NavLink>
            </li> */}
            <li className="menu__list_item logOut">
              <NavLink to="/log-out" className="menu__list_item-link">Log Out</NavLink>
            </li>
          </ul>
        </nav>
      )
    }
    
    return (
      <nav className="container menu">
        <ul className="menu__list">
          <li className="menu__list_item myPage">
            <NavLink to="/wekcome-page" className="menu__list_item-link">Welcome</NavLink>
          </li>
          <li className="menu__list_item news">
            <NavLink to="/sign-in" className="menu__list_item-link">Sign In</NavLink>
          </li>
          <li className="menu__list_item myFriends">
            <NavLink to="/sign-up" className="menu__list_item-link">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    isAuthenticated: state.userSettings.isAuthenticated
  }
}

export default connect(mapStateToProps)(NavigationBar);