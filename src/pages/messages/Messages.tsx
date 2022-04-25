import './messages.scss';

import { NavLink } from 'react-router-dom';

import Chat from '../../components/common/chat/Chat';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import AuthorMessage from './authorMessage/AuthorMessage';

const Messages = () => {
  return (
    <div className='messages'>
      <Layout position='right'>
        <aside className='messages--sidebar'>
          <Sidebar title='chats'>
            <Dialog name='Dmitri' id='1' badge='move' />
            <Dialog name='Vladimir' id='2' badge='online' />
            <Dialog name='Victor' id='3' badge='unOnline' />
          </Sidebar>
        </aside>
        <div className='messages--main'>
          <Chat />
        </div>
      </Layout>
    </div>
  );
};

type DialogPropsType = {
  name: string;
  id: string;
  badge?: 'online' | 'unOnline' | 'move' | 'none';
};

const Dialog = (props: DialogPropsType) => {
  const { name, id, badge } = props;
  return (
    <NavLink className='messages--link' to={id}>
      <AuthorMessage name={name} badge={badge} />
    </NavLink>
  );
};

export default Messages;
