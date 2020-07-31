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

    if (code === 13) {
      console.log(message);
      userMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <h1>Chatty the chatbot</h1>
      {/* handle messages */}
      <div>Messages go here</div>
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
