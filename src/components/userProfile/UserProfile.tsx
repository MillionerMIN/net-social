import './userProfile.scss';

import { TiLocationArrow } from 'react-icons/ti';

import Bg from '../../assets/images/Rectangle_3.jpg';
import Button from '../common/button/Button';
import UserPhoto from '../common/userPhoto/UserPhoto';

type UserProfileType = {
  name?: string;
  lastName?: string;
  photo?: string;
  about?: string;
  location?: string;
  bg?: string;
};

const UserProfile = (props: UserProfileType) => {
  const {
    bg = Bg,
    name = 'Name',
    lastName = 'LastName',
    photo,
    about,
    location,
  } = props;
  return (
    <section className='user-profile user-profile-bg'>
      <img className='user-profile--background' src={bg} alt='wallpaper' />
      <div className='user-profile--wrapper'>
        <div className='user-profile--photo'>
          <div className='user-profile--position'>
            <UserPhoto size={170} photo={photo} border={true} />
          </div>
        </div>
        <div className='user-profile--about'>
          <div className='user-profile--location'>
            <TiLocationArrow />
            <span>{location}</span>
          </div>
          <h6 className='user-profile--name'>
            {name} {lastName}
          </h6>
          <p>{about}</p>
          <Button className='user-profile--infoButton user-profile--infoButton-mr'>
            contact info
          </Button>
          <Button className='user-profile--infoButton' variant='secondary'>
            1,043 connections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
