import './routing.scss';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Messages = React.lazy(() => import('../pages/messages/Messages'));
const News = React.lazy(() => import('../pages/news/News'));
const Music = React.lazy(() => import('../pages/music/Music'));
const Setting = React.lazy(() => import('../pages/setting/Setting'));

const Routing = () => {
  return (
    <main className='main main-pd main-md'>
      <Suspense fallback='...Loading'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Routing;
