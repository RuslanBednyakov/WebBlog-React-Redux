import React, {Component} from 'react';


class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="welcome">
          <p className="welcome__message">
            Welcome to our site!
          </p>
      </div>
    );

  }

}

export default Welcome;