import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux';

import * as actions from '../../redux/actions';

import './style/SignUp.css'


const states = ['email', 'name', 'password', 'confirm'];

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      remember_me: false,
      password: '',
      confirm: '',
      displayError: false,
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

  nameCheck = () => {
    let name = this.state.name;
    
    const reg = /^[\w]{1}[\w-\.]*[\w]{1}$/i;
    const isValid = reg.test(name);
    if(!isValid) {
      this.setState(state => ({
        errorMessages: state.errorMessages.concat("Incorrect name"),
      }));
    }
    return isValid;
  };

  confirmPass = () => {
    let pass = this.state.password,
    confirm = this.state.confirm;

    if(pass !== confirm){
      this.setState(state => ({
        errorMessages: state.errorMessages.concat("Password didn't match"),
      }));
      return false
    }
    return true
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

    this.emailCheck() && this.nameCheck() && this.confirmPass() && this.epmtyFields() && this.props.signUp(this.state)
  };

  rememberMe = () => {
    this.setState({remember_me: !this.state.remember_me});
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
      <div className="sign-up__container">
        <h2 className="sign-up__container_title">Join us!</h2>
        <p className="sign-up__container_title-signature">Create your own account and join us</p>
        <div className="sign-up__container_email">
          <label className="sign-up__container_label" htmlFor="sign-up_email">Email</label>
          <input
            className="sign-up__container_input"
            id="sign-up_email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Please, enter your email"
          />
        </div>
        <div className="sign-up__container_name">
          <label className="sign-up__container_label" htmlFor="sign-up_name">Name</label>
          <input
            className="sign-up__container_input"
            id="sign-up_name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Please, enter your name"
          />
        </div>
        <div className="sign-up__container_password">
          <label className="sign-up__container_label" htmlFor="sign-up_password">Password</label>
          <input
            className="sign-up__container_input"
            id="sign-up_password"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Please, enter your password"
          />
        </div>
        <div className="sign-up__container_password-confirm">
          <label className="sign-up__container_label" htmlFor="sign-up_password-confirm">Confirm Password</label>
          <input
            className="sign-up__container_input"
            id="sign-up_password-confirm"
            type="text"
            name="confirm"
            value={this.state.confirm}
            onChange={this.onChange}
            placeholder="Please, confirm your password"
          />
        </div>
        <div className="sign-up__container_submit-button">
          <button
            className="sign-up__container_button"
            onClick={this.onSubmit}
          >
          Sign-up
          </button>
        </div>
        <div className="sign-up__container_error">
          {this.state.errorMessages.map( error => {
            return <p key={error} className='sign-up__container_error-text'>{error}</p>
          })}
        </div>
        <div className="sign-up__container_redirect">
          <p className="sign-up__container_redirect-text">
            Already have an account? <Link to="/sign-in" className="sign-in__container_redirect_link">Sign-In</Link>
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
    signUp: (data) => {
      dispatch(actions.auth.signUp(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);