// Import dependencies
import React from 'react';
import './App.css';

// Import redux components
import { Provider } from 'react-redux';
import store from './store';

// Import chat component
// Connect aplication to redux

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* [Insert] Chat component HERE! */}
        hello world!
      </div>
    </Provider>
  );
};

export default App;
