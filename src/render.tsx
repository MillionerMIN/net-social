// import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { addPost, updatePostText } from './redux/state';

const rerenderEntireTree = (state: any) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <App state={state} addPost={addPost} updatePostText={updatePostText} />
  );
};

export default rerenderEntireTree;
