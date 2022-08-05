import './messages.scss';

import { NavLink } from 'react-router-dom';

import ChatContainer from '../../components/common/chat/ChatContainer';
import Layout from '../../components/layout /Layout';
import Sidebar from '../../components/sidebar/Sidebar';
import { ActionType, MessagePageType } from '../../redux/state';
import AuthorMessage from './authorMessage/AuthorMessage';

type MessagesPropsType = {
  messagesData: MessagePageType;
  dispatch: (action: ActionType) => void;
};

const Messages = (props: MessagesPropsType) => {
  const { dispatch } = props;
  const { dialogData, messagesData } = props.messagesData;

  const dialogItems = dialogData.map((item) => (
    <Dialog key={item.id} id={item.id} name={item.name} photo={item.photo} />
  ));

  return (
    <div className='messages'>
      <Layout position='right'>
        <aside className='messages--sidebar'>
          <Sidebar title='chats'>{dialogItems}</Sidebar>
        </aside>
        <div className='messages--main'>
          <ChatContainer messages={messagesData} dispatch={dispatch} />
        </div>
      </Layout>
    </div>
  );
};

type DialogPropsType = {
  name: string;
  id: string;
  badge?: 'online' | 'unOnline' | 'move' | 'none';
  photo?: string;
};

const Dialog = (props: DialogPropsType) => {
  const { name, id, badge, photo } = props;
  return (
    <NavLink className='messages--link' to={id}>
      <AuthorMessage name={name} badge={badge} photo={photo} />
    </NavLink>
  );
};

export default Messages;
