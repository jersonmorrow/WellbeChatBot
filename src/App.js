// Import dependencies
import React from 'react';
import './App.css';

// Import redux components
import { Provider } from 'react-redux';
import store from './store';

// Import chat component
import Chat from './components/chat/Chat';
// Connect aplication to redux

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* [Insert] Chat component HERE! */}
        <Chat />
      </div>
    </Provider>
  );
};

export default App;
