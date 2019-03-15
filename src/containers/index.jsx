import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route} from 'react-router';
import {Redirect } from 'react-router';

import Welcome from './Welcome';
import MyPage from './MyPage';
import News from './News';
import Friends from './Friends';
import Chat from './Chat';
import LogOut from './LogOut';
import Search from './Search';
import * as actions from '../redux/actions';


class MainContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
    const token = localStorage.getItem('token');
    const data = {
      user: JSON.parse(localStorage.getItem('user')),
      token: token
    }
    if (token !== null) {
      this.props.setUser(data);
    }
  }



  render() {
    if (!this.props.user.isAuthenticated) {return <Redirect to="/sign-in"/>}
    return (
      <div>
        <Route 
          path='/welcome-page' 
          render={ props => <Welcome {...props} user={this.props.user} />}
        />
        <Route 
          path='/my-page' 
          render={ props => <MyPage {...props} user={this.props.user} />}
        />
        <Route 
          path='/news' 
          render={ props => <News {...props} user={this.props.user} />}
        />
        <Route 
          path='/friends' 
          render={ props => <Friends {...props} user={this.props.user} />}
        />
        <Route 
          path='/chat' 
          render={ props => <Chat {...props} user={this.props.user} />}
        />
        <Route 
          path='/log-out' 
          render={ props => <LogOut {...props} user={this.props.user} />}
        />
        <Route 
          path='/search' 
          render={ props => <Search {...props} user={this.props.user} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userSettings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (data) => {
      dispatch(actions.auth.setUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);