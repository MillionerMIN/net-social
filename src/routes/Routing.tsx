import './routing.scss';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ActionType, StateType } from '../redux/state';

const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Messages = React.lazy(() => import('../pages/messages/Messages'));
const News = React.lazy(() => import('../pages/news/News'));
const Music = React.lazy(() => import('../pages/music/Music'));
const Setting = React.lazy(() => import('../pages/setting/Setting'));
const NotFound = React.lazy(() => import('../pages/notFound/NotFound'));

type RoutingPropsType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

const Routing = (props: RoutingPropsType) => {
  const { state, dispatch } = props;

  return (
    <main className='main main-pd main-md'>
      <Suspense fallback='...Loading'>
        <Routes>
          <Route
            path='/'
            element={
              <Profile
                profilePage={state.profilePage}
                friends={state.sidebar.friends}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path='profile'
            element={
              <Profile
                profilePage={state.profilePage}
                friends={state.sidebar.friends}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path='messages'
            element={
              <Messages messagesData={state.messagesPage} dispatch={dispatch} />
            }
          >
            <Route
              path=':chat'
              element={
                <Messages
                  messagesData={state.messagesPage}
                  dispatch={dispatch}
                />
              }
            />
          </Route>

          <Route path='news' element={<News />} />
          <Route path='music' element={<Music />} />
          <Route path='setting' element={<Setting />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Routing;
