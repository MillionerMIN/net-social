import './chat.scss';

import { ChangeEvent, useState } from 'react';

import Button from '../button/Button';
import Message from '../message/Message';
import TextareaText from '../textareaText/TextareaText';

type ChatPropsType = {
  messages?: string[];
};

const Chat = (props: ChatPropsType) => {
  const { messages = ['Hi', 'Let`s tell with you', 'Go'] } = props;

  const [textarea, setTextarea] = useState<string | null>(null);
  const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    const text = e.currentTarget.value;
    setTextarea(text);
  };

  const addPostHandler = () => {
    alert(textarea);
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
          <Button className='chat--button' onClick={addPostHandler}>
            send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
