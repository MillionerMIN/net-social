import './post.scss';

import { Link } from 'react-router-dom';

import AuthorPost from '../../../components/common/authorPost/AuthorPost';

type PostPropsType = {
  photo: string;
  name: string;
  profession: string;
  message: string;
  like: number;
};

const Post = (props: PostPropsType) => {
  const { name, photo, profession, message, like } = props;
  return (
    <section className='post post-bg'>
      <div className='post--wrapper'>
        <div className='post--header'>
          <span>Audrey Alexander comment this</span>
          <Link to={'#'}>...</Link>
        </div>
        <div className='post--body'>
          <AuthorPost name={name} photo={photo} profession={profession} />

          <p>{message}</p>
        </div>
        <div className='post--footer'>
          <div>{like}</div>
          <div>coments</div>
          <div></div>
          <div>share</div>
        </div>
      </div>
    </section>
  );
};

export default Post;
