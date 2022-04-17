import './profile.scss';

import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';

const userProfile = {
  name: 'Dmitry',
  lastName: 'Kargaev',
  bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
  about:
    'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
  photo:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
  location: 'Malibu, California, USA',
};

const Profile = () => {
  return (
    <div className='profile'>
      <Layout>
        <UserProfile
          bg={userProfile.bg}
          photo={userProfile.photo}
          about={userProfile.about}
          location={userProfile.location}
        />
        <Sidebar />
      </Layout>
    </div>
  );
};

export default Profile;
