import './post.scss';

import { Link } from 'react-router-dom';

import AuthorPost from '../../../components/common/authorPost/AuthorPost';

type MyPostPropsType = {
  author?: {
    photo: string;
    name: string;
    profession: string;
  };
};

const Post = (props: MyPostPropsType) => {
  const { author } = props;
  return (
    <section className='post post-bg'>
      <div className='post--wrapper'>
        <div className='post--header'>
          <span>Audrey Alexander comment this</span>
          <Link to={'#'}>...</Link>
        </div>
        <div className='post--body'>
          <AuthorPost />

          <p>
            What did the Dursleys care if Harry lost his place on the House
            Quidditch team because he hadn’t practiced all summer? What was it
            to the Dursleys if Harry went back to school without any of his
            homework done? The Dursleys were what wizards called Muggles (not a
            drop of magical blood in their veins).
          </p>
        </div>
        <div className='post--footer'>
          <div>like</div>
          <div>coments</div>
          <div></div>
          <div>share</div>
        </div>
      </div>
    </section>
  );
};

export default Post;
