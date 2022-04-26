import './profile.scss';

import NewPost from '../../components/common/newPost/NewPost';
import ViewCounter from '../../components/common/viewCounter/ViewCounter';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';
import Post from './post/Post';

const userProfile = {
  name: 'Leonardo',
  lastName: 'DiCaprio',
  bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
  about:
    'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
  profession: 'Freelance UX/UI',
  photo:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
  location: 'Malibu, California, USA',
};

const Profile = () => {
  const postData = [
    {
      name: 'Leonardo',
      lastName: 'DiCaprio',
      bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
      about:
        'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
      profession: 'Freelance UX/UI',
      photo:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
      location: 'Malibu, California, USA',
      like: 20,
      message: 'Hello world',
    },
    {
      name: 'Theresa',
      lastName: 'Steward',
      bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
      about:
        'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
      profession: 'Freelance UX/UI',
      photo:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
      location: 'Malibu, California, USA',
      like: 10,
      message: 'Hello world',
    },
    {
      name: 'Theresa',
      lastName: 'Steward',
      bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
      about:
        'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
      profession: 'Freelance UX/UI',
      photo:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
      location: 'Malibu, California, USA',
      like: 15,
      message: 'Hello world',
    },
  ];

  const posts = postData.map((post, i) => (
    <Post
      key={i}
      name={`${post.name} ${post.lastName}`}
      photo={post.photo}
      profession={post.profession}
      message={post.message}
      like={post.like}
    />
  ));

  return (
    <div className='profile'>
      <Layout>
        <div className='profile--left'>
          <UserProfile
            name={userProfile.name}
            lastName={userProfile.lastName}
            bg={userProfile.bg}
            photo={userProfile.photo}
            about={userProfile.about}
            location={userProfile.location}
          />
          <NewPost />
          {posts}
        </div>
        <aside className='profile--sidebar'>
          <Sidebar>
            <ViewCounter counter={365} span='views today' />
            <ViewCounter counter={15} span='posts views' />
            <ViewCounter counter={9} span='search appearances' />
          </Sidebar>
          <Sidebar />
        </aside>
      </Layout>
    </div>
  );
};

export default Profile;
