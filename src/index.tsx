import './index.scss';

import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/state';

const rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  );
};
rerenderEntireTree();
store.subscriber(rerenderEntireTree);
