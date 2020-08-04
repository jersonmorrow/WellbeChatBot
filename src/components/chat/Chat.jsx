import React, { useState } from 'react';
import { connect } from 'react-redux';

// Import action
import { userMessage } from '../../actions/watson';

const Chat = ({ chat, userMessage }) => {
  //handle users message
  const [message, setMessage] = useState('');

  // function that handle user submisions
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;
    const keyEnter = 13;

    if (code === keyEnter) {
      console.log(message);
      userMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <h1>Chatty the chatbot</h1>
      {/* handle messages */}
      {chat.length === 0
        ? ''
        : chat.map((msg) => <div className={msg.type}> {msg.message} </div>)}
      {/* input box */}
      <input
        id="chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage })(Chat);
