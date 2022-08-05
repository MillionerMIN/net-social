import './newPost.scss';

import { ChangeEvent, useState } from 'react';

import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

type NewPostPropsType = {
  onAddPost: (text: string) => void;
  newPostText: string;
};

const NewPost = (props: NewPostPropsType) => {
  const { onAddPost, newPostText } = props;
  const [textarea, setTextarea] = useState<string>(newPostText);

  const addPostHandler = () => {
    onAddPost(textarea);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    const text = e.currentTarget.value;
    setTextarea(text);
  };

  return (
    <section className='new-post new-post-bg'>
      <div className='new-post--wrapper'>
        <span className='new-post--text'>New post</span>
        <div className='new-post--send'>
          <TextareaText
            onChange={onChangeHandler}
            border={true}
            value={textarea as string}
            placeholder='What’s on your mind?'
            name='newPost'
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
