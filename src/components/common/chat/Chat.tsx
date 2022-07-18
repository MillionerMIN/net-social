import './chat.scss';

import { ChangeEvent, useState } from 'react';

import {
  addMessageAC,
  updateMessageTextAC,
} from '../../../redux/messages-reducer';
import { ActionType } from '../../../redux/state';
import Button from '../button/Button';
import Message from '../message/Message';
import TextareaText from '../textareaText/TextareaText';

type ChatPropsType = {
  messages?: string[];
  dispatch: (action: ActionType) => void;
};

const Chat = (props: ChatPropsType) => {
  const { messages = [], dispatch } = props;

  const [textarea, setTextarea] = useState<string>('');
  const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    const text = e.currentTarget.value;
    setTextarea(text);
    // dispatch(updateMessageTextAC(textarea));
  };

  const addMessageHandler = () => {
    dispatch(addMessageAC(textarea));
  };

  const contentMessages = messages.map((mess, i) => (
    <Message key={i} message={mess} />
  ));
  return (
    <section className='chat chat-bg'>
      <div className='chat--wrapper'>
        <span className='chat--text'>Chat with Kyle Fisher</span>
        <div className='chat--messages'>{contentMessages}</div>
        <div className='chat--send'>
          <TextareaText
            onChange={textareaHandler}
            border={true}
            placeholder='What’s on your mind?'
            name='new post'
          />
          <Button className='chat--button' onClick={addMessageHandler}>
            send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
