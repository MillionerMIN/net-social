import './index.scss';

import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/redux-store';

const rerenderEntireTree = (state: any) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
