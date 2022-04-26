import './newPost.scss';

import { ChangeEvent, useState } from 'react';

import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

const NewPost = () => {
  const [textarea, setTextarea] = useState<string | null>(null);
  const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    const text = e.currentTarget.value;
    setTextarea(text);
  };

  const addPostHandler = () => {
    alert(textarea);
  };

  return (
    <section className='new-post new-post-bg'>
      <div className='new-post--wrapper'>
        <span className='new-post--text'>New post</span>
        <div className='new-post--send'>
          <TextareaText
            onChange={textareaHandler}
            border={true}
            placeholder='What’s on your mind?'
            name='new post'
          />
          <Button className='new-post--button' onClick={addPostHandler}>
            send
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
