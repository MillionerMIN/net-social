import './index.scss';

import ReactDOM from 'react-dom/client';

import App from './App';
import state, { addPost, subscriber, updatePostText } from './redux/state';

const rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <App state={state} addPost={addPost} updatePostText={updatePostText} />
  );
  console.log('render');
};

subscriber(rerenderEntireTree);

rerenderEntireTree();
