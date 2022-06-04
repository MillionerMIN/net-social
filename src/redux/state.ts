import Photo_1 from '../assets/images/friends/Photo_1.jpg';
import Photo_2 from '../assets/images/friends/Photo_2.jpg';
import Photo_3 from '../assets/images/friends/Photo_3.jpg';
import Photo_4 from '../assets/images/friends/Photo_4.jpg';
import Photo_5 from '../assets/images/friends/Photo_5.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const store = {
  _state: {
    profilePage: {
      userProfile: {
        name: 'Leonardo',
        lastName: 'DiCaprio',
        bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
        about:
          'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
        profession: 'Freelance UX/UI',
        photo:
          'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
        location: 'Malibu, California, USA',
      },
      postData: [
        {
          name: 'Leonardo',
          lastName: 'DiCaprio',
          bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
          about:
            'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
          profession: 'Freelance UX/UI',
          photo:
            'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
          location: 'Malibu, California, USA',
          like: 20,
          message: 'Hello world',
        },
        {
          name: 'Theresa',
          lastName: 'Steward',
          bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
          about:
            'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
          profession: 'Freelance UX/UI',
          photo:
            'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
          location: 'Malibu, California, USA',
          like: 10,
          message: 'Hello world',
        },
        {
          name: 'Theresa',
          lastName: 'Steward',
          bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
          about:
            'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
          profession: 'Freelance UX/UI',
          photo:
            'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
          location: 'Malibu, California, USA',
          like: 15,
          message: 'Hello world',
        },
      ],
      newMessagePost: 'it-kamasutra' as string,
    },
    messagesPage: {
      dialogData: [
        { id: '1', name: 'Theresa Steward', photo: Photo_1 },
        { id: '2', name: 'Darlene Black', photo: Photo_2 },
        { id: '3', name: 'Brandon Wilson', photo: Photo_3 },
        { id: '4', name: 'Kyle Fisher', photo: Photo_4 },
        { id: '5', name: 'Audrey Alexander', photo: Photo_5 },
      ],

      messagesData: ['Hi', 'Let`s tell with you', 'Go', 'What does you do?'],
    },
    sidebar: {
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
    },
  },
  // setState(value: any) {
  //   this._state = value;
  // },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('render');
  },

  subscriber(observer: any) {
    this._callSubscriber = observer;
  },
  dispatch(action: { type: string; payload?: string }) {
    // action  this object have type and other arguments
    if (action.type === ADD_POST) {
      const newPost = {
        name: 'Leonardo',
        lastName: 'DiCaprio',
        bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
        about: 'Freelance UX/UI designer',
        profession: 'Freelance UX/UI',
        photo:
          'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
        location: 'Malibu, California, USA',
        like: 20,
        message: this._state.profilePage.newMessagePost,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newMessagePost = '';
      this._callSubscriber();
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newMessagePost = action.payload as string;
      this._callSubscriber();
    }
  },
};

//added action creator

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text: string) => ({
  type: UPDATE_POST_TEXT,
  payload: text,
});

export type UserProfileType = {
  name: string;
  lastName: string;
  bg: string;
  about: string;
  profession: string;
  photo: string;
  location: string;
};

export type PostDataType = {
  name: string;
  lastName: string;
  bg: string;
  about: string;
  profession: string;
  photo: string;
  location: string;
  like: number;
  message: string | null;
};

export type DialogObjType = {
  id: string;
  name: string;
  photo?: string;
};

export type ProfilePage = {
  userProfile: UserProfileType;
  postData: PostDataType[];
  newMessagePost: string | null;
};

export type StateType = {
  profilePage: ProfilePage;
  messagesPage: { dialogData: DialogObjType[]; messagesData: string[] };
  sidebar: {
    friends: UserProfileType[];
  };
};

export type StoreType = typeof store;

export default store;
