import './chat.scss';

import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

type ChatPropsType = {
  messages?: string[];
};

const Chat = (props: ChatPropsType) => {
  const { messages = ['Hi', 'Let`s tell with you', 'Go'] } = props;

  const contentMessages = messages.map((mess, i) => (
    <div key={i} className='chat--message'>
      {mess}
    </div>
  ));
  return (
    <section className='chat chat-bg'>
      <div className='chat--wrapper'>
        <span className='chat--text'>Chat with Kyle Fisher</span>
        <div className='chat--messages'>{contentMessages}</div>
        <div className='chat--send'>
          <TextareaText
            border={true}
            placeholder='What’s on your mind?'
            name='new post'
          />
          <Button className='chat--button'>send</Button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
