import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux';

import * as actions from '../../redux/actions';

import './style/SignIn.css'

const states = ['email', 'password']

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessages: [],
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({[e.target.name]: value});
  };

  emailCheck = () => {
    let email = this.state.email;
    const reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i
    const isValid = reg.test(email);
    if(!isValid) {
      this.setState(state => ({
        errorMessages: state.errorMessages.concat("Incorrect email"),
      }));
    }
    return isValid;
  };

  epmtyFields = () => {
    let val = states.some(name => {
        return this.state[name] === '' || this.state[name] === ' '
    })
    this.setState(state => ({
      errorMessages: state.errorMessages.concat("Please enter all fields"),
    }));
    return !val
  };

  onSubmit = () => {
    this.setState({
      errorMessages: [],
    });

    this.emailCheck() && this.epmtyFields() && this.props.login(this.state);
  };


  render(){
    const {user} = this.props;
    const token = localStorage.getItem('token');
    if(user.isAuthenticated || !!token){
      return  (
        <Redirect to="/"/>
      )
    }
    return (
      <div className="sign-in__container">
        <h2 className="sign-in__container_title">Sign in!</h2>
        <p className="sign-in__container_title-signature">Welcome to our community!</p>
        <div className="sign-in__container_email">
          <label className="sign-in__container_label" htmlFor="sign-in_email">Email</label>
          <input
            className="sign-in__container_input"
            id="sign-in_email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Please, enter your email"
          />
        </div>
        <div className="sign-in__container_password">
          <label className="sign-in__container_label" htmlFor="sign-in_password">Password</label>
          <input
            className="sign-in__container_input"
            id="sign-in_password"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Please, enter your password"
          />
        </div>
        <div className="sign-in__container_submit-button">
          <button
            className="sign-in__container_button"
            onClick={this.onSubmit}
          >
          Sign-in
          </button>
        </div>
        <div className="sign-in__container_error" id="sign-in_error">
          {this.state.errorMessages.map( error => {
            return <p key={error} className='sign-up__container_error-text'>{error}</p>
          })}
        </div>
        <div className="sign-in__container_redirect">
          <p className="sign-in__container_redirect-text">
            Still don't have an account?<Link to="/sign-up" className="sign-in__container_redirect_link">Sign-Up</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.userSettings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(actions.auth.login(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);