import './newPost.scss';

import Button from '../button/Button';
import TextareaText from '../textareaText/TextareaText';

const NewPost = () => {
  return (
    <section className='new-post new-post-bg'>
      <div className='new-post--wrapper'>
        <span className='new-post--text'>New post</span>
        <div className='new-post--send'>
          <TextareaText
            border={true}
            placeholder='What’s on your mind?'
            name='new post'
          />
          <Button className='new-post--button'>send</Button>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
