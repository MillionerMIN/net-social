import './userPhoto.scss';

import Badge from '../badge/Badge';

type UserPhotoType = {
  photo: string | undefined;
  size: number;
  border?: boolean;
  badge?: 'online' | 'unOnline' | 'move' | 'none';
};

const UserPhoto = (props: UserPhotoType) => {
  const { photo, size = 52, border = false, badge = 'none' } = props;

  const sizeBlock = size === 170 ? 'user-avatar-size user-avatar-border' : '';
  const imgBorder = border ? 'user-avatar--photo-border' : '';
  return (
    <div className={`user-avatar ${sizeBlock}`}>
      <Badge state={badge}>
        <img
          className={`user-avatar--photo ${imgBorder}`}
          src={photo}
          alt='avatarPhoto'
        />
      </Badge>
    </div>
  );
};

export default UserPhoto;
