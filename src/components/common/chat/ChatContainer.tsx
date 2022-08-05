import './chat.scss';

import { addMessageAC } from '../../../redux/messages-reducer';
import { ActionType } from '../../../redux/state';
import Chat from './Chat';

type ChatContainerPropsType = {
  messages?: string[];
  dispatch: (action: ActionType) => void;
};

const ChatContainer = (props: ChatContainerPropsType) => {
  const { messages = [], dispatch } = props;

  const addMessageHandler = (text: string) => {
    dispatch(addMessageAC(text));
  };
  return <Chat messages={messages} onAddMessage={addMessageHandler} />;
};

export default ChatContainer;
