import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../redux/actions';

class LogOut extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.logout()
  }

  render(){
    return (
      <Redirect to="/"/>
    );

  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.auth.logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(LogOut);