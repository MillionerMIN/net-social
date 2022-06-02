import './routing.scss';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { StoreType } from '../redux/state';

const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Messages = React.lazy(() => import('../pages/messages/Messages'));
const News = React.lazy(() => import('../pages/news/News'));
const Music = React.lazy(() => import('../pages/music/Music'));
const Setting = React.lazy(() => import('../pages/setting/Setting'));
const NotFound = React.lazy(() => import('../pages/notFound/NotFound'));

type RoutingPropsType = {
  store: StoreType;
};

const Routing = (props: RoutingPropsType) => {
  const { store } = props;
  console.log(store.getState());

  return (
    <main className='main main-pd main-md'>
      <Suspense fallback='...Loading'>
        <Routes>
          <Route
            path='/'
            element={
              <Profile
                profilePage={store.getState().profilePage}
                friends={store.getState().sidebar.friends}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
              />
            }
          />
          <Route
            path='profile'
            element={
              <Profile
                profilePage={store.getState().profilePage}
                friends={store.getState().sidebar.friends}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
              />
            }
          />
          <Route
            path='messages'
            element={
              <Messages
                messagesData={store.getState().messagesPage.messagesData}
                dialogData={store.getState().messagesPage.dialogData}
              />
            }
          >
            <Route
              path=':chat'
              element={
                <Messages
                  messagesData={store.getState().messagesPage.messagesData}
                  dialogData={store.getState().messagesPage.dialogData}
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
