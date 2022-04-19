import './userPhoto.scss';

type UserPhotoType = {
  photo: string | undefined;
  size: number;
  border?: boolean;
};

const UserPhoto = (props: UserPhotoType) => {
  const { photo, size = 52, border = false } = props;

  const sizeBlock = size === 170 ? 'user-avatar-size user-avatar-border' : '';
  const imgBorder = border ? 'user-avatar--photo-border' : '';
  return (
    <div className={`user-avatar ${sizeBlock}`}>
      <img
        className={`user-avatar--photo ${imgBorder}`}
        src={photo}
        alt='avatarPhoto'
      />
    </div>
  );
};

export default UserPhoto;
