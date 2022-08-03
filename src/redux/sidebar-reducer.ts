import Photo_1 from '../assets/images/friends/Photo_1.jpg';
import Photo_2 from '../assets/images/friends/Photo_2.jpg';
import Photo_3 from '../assets/images/friends/Photo_3.jpg';
import Photo_4 from '../assets/images/friends/Photo_4.jpg';
import Photo_5 from '../assets/images/friends/Photo_5.jpg';
import { SidebarType } from './state';

const initialState: SidebarType = {
  friends: [
    {
      name: 'Theresa',
      lastName: 'Steward',
      bg: '',
      about: '',
      profession: 'HR-manager, 10 000 connec...',
      photo: Photo_1,
      location: '',
    },
    {
      name: 'Darlene',
      lastName: 'Black',
      bg: '',
      about: '',
      profession: 'iOS developer',
      photo: Photo_2,
      location: '',
    },
    {
      name: 'Brandon',
      lastName: 'Wilson',
      bg: '',
      about: '',
      profession: 'Senior UX designer',
      photo: Photo_3,
      location: '',
    },
    {
      name: 'Kyle',
      lastName: 'Fisher',
      bg: '',
      about: '',
      profession: 'Product designer at Com...',
      photo: Photo_4,
      location: '',
    },
    {
      name: 'Audrey',
      lastName: 'Alexander',
      bg: '',
      about: '',
      profession: 'Team lead at Google',
      photo: Photo_5,
      location: '',
    },
  ],
};

const sidebarReducer = (state = initialState, action: any) => {
  return state;
};

export default sidebarReducer;
