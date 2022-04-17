import './profile.scss';

import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';

const Profile = () => {
  return (
    <div className='profile'>
      <Layout>
        <div className='profile--bg profile-pd'>profile</div>
        <Sidebar />
      </Layout>
    </div>
  );
};

export default Profile;
