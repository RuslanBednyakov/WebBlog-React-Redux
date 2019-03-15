import React, {Component} from 'react';


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return  (
      <p> &copy; Footer content <a href="#" className="footer__link"> Link footer </a> </p>
    )
  }
}

export default Footer;