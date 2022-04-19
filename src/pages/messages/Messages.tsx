import './messages.scss';

import AuthorPost from '../../components/common/authorPost/AuthorPost';
import Chat from '../../components/common/chat/Chat';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';

const Messages = () => {
  return (
    <div className='messages'>
      <Layout position='right'>
        <aside className='messages--sidebar'>
          <Sidebar title='chats'>
            <AuthorPost />
            <AuthorPost />
            <AuthorPost />
            <AuthorPost />
          </Sidebar>
        </aside>
        <div className='messages--main'>
          <Chat />
        </div>
      </Layout>
    </div>
  );
};

export default Messages;
