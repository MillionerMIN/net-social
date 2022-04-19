import './authorMessage.scss';

import UserPhoto from '../../../components/common/userPhoto/UserPhoto';

type AuthorMessageType = {
  name?: string;
  photo?: string;
  preview?: string;
  badge?: 'online' | 'unOnline' | 'move' | 'none';
};

const AuthorMessage = (props: AuthorMessageType) => {
  const {
    photo = 'https://assets.jazziz.com/2022/04/miles-450x450.jpg',
    name = 'no name',
    preview = 'Hey, how is your project?',
    badge = 'none',
  } = props;
  return (
    <div className='author-message author-message-mb author-message-pd '>
      <UserPhoto size={52} photo={photo} badge={badge} />
      <div>
        <div className='author-message--name'>{name}</div>
        <div className='author-message--preview'>{preview}</div>
      </div>
    </div>
  );
};

export default AuthorMessage;
