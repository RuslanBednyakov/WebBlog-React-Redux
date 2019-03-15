import React, {Component} from 'react';


class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="chat__container">
        <ul className="chat__container_list" id="chatList"></ul>
        <input type="text" className="chat__container_input" id="inputMessage" />
        <button className="chat__container_button" id="sendMessageButton">Send</button>
      </div>
    );

  }

}

export default Chat;