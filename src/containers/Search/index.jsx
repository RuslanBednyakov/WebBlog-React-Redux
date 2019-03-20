import React, {Component} from 'react';
import { connect } from 'react-redux';

import FoundUser from '../../components/SearchUsers/FoundUser'
import * as actions from '../../redux/actions';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonClicked: false
    }

  }

  createRows = () => {
    const {user} = this.props;
    return this.props.foundUsers.map(foundUser => {
      return (
        <li key={foundUser.id} className='search__container_results-list-item'>
          <FoundUser 
            user={user}
            foundUser={foundUser}
            subscribe = {this.props.subscribe}
            unsubscribe = {this.props.unsubscribe}
          />
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
    user: state.userSettings.user,
    foundUsers: state.users.listUsers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getListUsers: (data) => {
      dispatch(actions.users.getListUsers(data))
    },
    subscribe: (data) => {
      dispatch(actions.followers.subscribe(data))
    },
    unsubscribe: (data) => {
      dispatch(actions.followers.unsubscribe(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Search);