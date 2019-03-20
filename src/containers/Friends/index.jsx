import React, {Component} from 'react';
import { connect } from 'react-redux';

import User from '../../components/User';
import * as actions from '../../redux/actions';


class Friends extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  createRows = () => {
    return this.props.friends.map(friend => {
      return (
        <li key={friend.id} className='search__container_results-list-item'>
          <User user={friend}/>
        </li>
      );
    })
  }

  componentDidMount() {
    const {getListFriends, user} = this.props;
    getListFriends(user.user_id);
  }

  render(){
    const {friends} = this.props;
    console.log('-----', friends)
    const rows = friends ? this.createRows() : null;
    return (
      <div className="friends__container">
        <ul className="friends__container_list" id="friends__list">
          {rows}
        </ul>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    user: state.userSettings.user,
    friends: state.users.listFriends
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getListFriends: (data) => {
      dispatch(actions.users.getListFriends(data))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Friends);