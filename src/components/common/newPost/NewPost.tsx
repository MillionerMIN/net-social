import './newPost.scss';

import { ChangeEvent, useState } from 'react';

import { addPostAC, updatePostTextAC } from '../../../redux/profile-reducer';
import { ActionType } from '../../../redux/state';
import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

type NewPostPropsType = {
  dispatch: (action: ActionType) => void;
  newPostText: string;
};

const NewPost = (props: NewPostPropsType) => {
  const { dispatch, newPostText } = props;
  const [textarea, setTextarea] = useState<string>(newPostText);

  const addPostHandler = () => {
    dispatch(addPostAC(textarea));
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    const text = e.currentTarget.value;
    setTextarea(text);
    // dispatch(updatePostTextAC(textarea));
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
