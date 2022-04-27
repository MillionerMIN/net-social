import './profile.scss';

import NewPost from '../../components/common/newPost/NewPost';
import ViewCounter from '../../components/common/viewCounter/ViewCounter';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';
import { PostDataType, UserProfileType } from '../../redux/state';
import AuthorMessage from '../messages/authorMessage/AuthorMessage';
import Post from './post/Post';

type ProfilePropsType = {
  userProfile: UserProfileType;
  postData: PostDataType[];
  friends: UserProfileType[];
  addPost: (text: string) => void;
};

const Profile = (props: ProfilePropsType) => {
  const { userProfile, postData, friends, addPost } = props;

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
  const friendsSidebar = friends.map((friend, i) => (
    <AuthorMessage
      key={i}
      name={`${friend.name} ${friend.lastName}`}
      photo={friend.photo}
      preview={friend.profession}
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
          <NewPost addPost={addPost} />
          {posts}
        </div>
        <aside className='profile--sidebar'>
          <Sidebar>
            <ViewCounter counter={365} span='views today' />
            <ViewCounter counter={15} span='posts views' />
            <ViewCounter counter={9} span='search appearances' />
          </Sidebar>
          <Sidebar title='friends' link={{ value: 'view all', href: '#' }}>
            {friendsSidebar}
          </Sidebar>
        </aside>
      </Layout>
    </div>
  );
};

export default Profile;
