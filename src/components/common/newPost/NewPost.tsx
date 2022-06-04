import './newPost.scss';

import { ChangeEvent } from 'react';

import { addPostAC, updatePostTextAC } from '../../../redux/state';
import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

type NewPostPropsType = {
  dispatch: (action: { type: string; payload?: string }) => void;
  newPostText: string | null;
};

const NewPost = (props: NewPostPropsType) => {
  const { dispatch, newPostText } = props;
  // const [textarea, setTextarea] = useState<string | null>(null);
  // const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   e.preventDefault;
  //   const text = e.currentTarget.value;
  //   setTextarea(text);
  // };

  const addPostHandler = () => {
    dispatch(addPostAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault;
    dispatch(updatePostTextAC(e.currentTarget.value));
  };

  return (
    <section className='new-post new-post-bg'>
      <div className='new-post--wrapper'>
        <span className='new-post--text'>New post</span>
        <div className='new-post--send'>
          <TextareaText
            onChange={onChangeHandler}
            border={true}
            value={newPostText as string}
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
