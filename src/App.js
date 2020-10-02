import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <PostForm />
            <hr />
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
