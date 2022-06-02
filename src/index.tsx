import './index.scss';

import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/state';

const rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App store={store} />);
  console.log('#####store', store.getState());
};
rerenderEntireTree();
store.subscriber(rerenderEntireTree);
