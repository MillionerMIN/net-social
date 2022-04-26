import './profile.scss';

import { PostDataType, UserProfileType } from '../../App';
import NewPost from '../../components/common/newPost/NewPost';
import ViewCounter from '../../components/common/viewCounter/ViewCounter';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';
import Post from './post/Post';

type ProfilePropsType = {
  userProfile: UserProfileType;
  postData: PostDataType[];
};

const Profile = (props: ProfilePropsType) => {
  const { userProfile, postData } = props;

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
