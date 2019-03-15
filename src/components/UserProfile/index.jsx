import React, {Component} from 'react';
import {connect} from 'react-redux';

import User from '../User';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="user__container_header">
        <User  user={this.props.user}/>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    user: state.userSettings
  }
}


export default connect(mapStateToProps, null)(UserProfile);