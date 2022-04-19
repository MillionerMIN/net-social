import './authorPost.scss';

import UserPhoto from '../userPhoto/UserPhoto';

type AuthorPostPropsType = {
  photo?: string;
  name?: string;
  profession?: string;
};

const AuthorPost = (props: AuthorPostPropsType) => {
  const {
    photo = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
    name = 'No name',
    profession = 'no profession',
  } = props;
  return (
    <div className='author author-mb'>
      <UserPhoto size={52} photo={photo} />
      <div>
        <div className='author--name'>{name}</div>
        <div className='author--profession'>{profession}</div>
      </div>
    </div>
  );
};

export default AuthorPost;
