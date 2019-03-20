import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../redux/actions';

class SearchUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({search: value});
  };

  searchUsers = () => {
    console.log('search', this.state.search)
    this.props.getListUsers({name: this.state.search})
    this.props.history.push('/search')
  };

  render(){
    return (
      <div className="header__container_search">
        <input
          className="header__container_search-input"
          type="text"
          name="search"
          placeholder="Type user name"
          value={this.state.search}
          onChange={this.onChange}
        />
        <button 
          className="button header__container_search-button"
          onClick={this.searchUsers}
        >
          Search
        </button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getListUsers: (data) => {
      dispatch(actions.users.getListUsers(data))
    },
  }
}

export default connect(null, mapDispatchToProps)(withRouter(SearchUsers));