import React, { useState } from 'react';

const Chat = () => {
  //handle users message
  const [message, setMessage] = useState('');

  // function that handle user submisions
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
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

export default Chat;
