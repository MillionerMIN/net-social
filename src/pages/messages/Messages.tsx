import './messages.scss';

import { NavLink } from 'react-router-dom';

import Chat from '../../components/common/chat/Chat';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import AuthorMessage from './authorMessage/AuthorMessage';

const Messages = () => {
  const dialogData = [
    { id: '1', name: 'Darlene Black', photo: '' },
    { id: '2', name: 'Theresa Steward', photo: '' },
    { id: '3', name: 'Brandon Wilson', photo: '' },
    { id: '4', name: 'Kyle Fisher', photo: '' },
    { id: '5', name: 'Audrey Alexander', photo: '' },
  ];

  const messagesData = ['Hi', 'Let`s tell with you', 'Go', 'What does you?'];

  const dialogItems = dialogData.map((item) => (
    <Dialog key={item.id} id={item.id} name={item.name} />
  ));

  return (
    <div className='messages'>
      <Layout position='right'>
        <aside className='messages--sidebar'>
          <Sidebar title='chats'>{dialogItems}</Sidebar>
        </aside>
        <div className='messages--main'>
          <Chat messages={messagesData} />
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
