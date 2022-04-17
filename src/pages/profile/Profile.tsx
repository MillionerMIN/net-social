import './profile.scss';

import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';

const Profile = () => {
  return (
    <div className='profile'>
      <Layout>
        <UserProfile />
        <Sidebar />
      </Layout>
    </div>
  );
};

export default Profile;
