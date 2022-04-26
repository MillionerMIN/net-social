import './routing.scss';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DialogObjType, PostDataType, UserProfileType } from '../App';

const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Messages = React.lazy(() => import('../pages/messages/Messages'));
const News = React.lazy(() => import('../pages/news/News'));
const Music = React.lazy(() => import('../pages/music/Music'));
const Setting = React.lazy(() => import('../pages/setting/Setting'));
const NotFound = React.lazy(() => import('../pages/notFound/NotFound'));

type RoutingPropsType = {
  userProfile: UserProfileType;
  posts: PostDataType[];
  messagesData: string[];
  dialogData: DialogObjType[];
};

const Routing = (props: RoutingPropsType) => {
  const { messagesData, dialogData, userProfile, posts } = props;
  return (
    <main className='main main-pd main-md'>
      <Suspense fallback='...Loading'>
        <Routes>
          <Route
            path='/'
            element={<Profile postData={posts} userProfile={userProfile} />}
          />
          <Route
            path='profile'
            element={<Profile postData={posts} userProfile={userProfile} />}
          />
          <Route
            path='messages'
            element={
              <Messages messagesData={messagesData} dialogData={dialogData} />
            }
          >
            <Route
              path=':chat'
              element={
                <Messages messagesData={messagesData} dialogData={dialogData} />
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
