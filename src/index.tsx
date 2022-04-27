import './index.scss';

// import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import state, { addPost } from './redux/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App state={state} addPost={addPost} />);
