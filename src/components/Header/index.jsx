import React, {Component} from 'react';
import SearchUsers from '../SearchUsers'


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <header className="header">
        <div className="container header__container">
          <div className="header__container_logo">
            <img className="header__container_logo-img" src="img/BlackandWhite.png" alt="BlackandWhite" />
            <p className="header__container_logo-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <SearchUsers />
        </div>
      </header>
    );
  }
}

export default Header;