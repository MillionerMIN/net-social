import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routing from './routes/Routing';

// #####################  Data messages #######################

export type DialogObjType = {
  id: string;
  name: string;
  photo?: string;
};

const dialogData: DialogObjType[] = [
  { id: '1', name: 'Darlene Black', photo: '' },
  { id: '2', name: 'Theresa Steward', photo: '' },
  { id: '3', name: 'Brandon Wilson', photo: '' },
  { id: '4', name: 'Kyle Fisher', photo: '' },
  { id: '5', name: 'Audrey Alexander', photo: '' },
];

const messagesData: string[] = [
  'Hi',
  'Let`s tell with you',
  'Go',
  'What does you do?',
];

// #####################  Data profile #######################
export type UserProfileType = {
  name: string;
  lastName: string;
  bg: string;
  about: string;
  profession: string;
  photo: string;
  location: string;
};

const userProfile: UserProfileType = {
  name: 'Leonardo',
  lastName: 'DiCaprio',
  bg: 'https://img.wallpapersafari.com/desktop/1920/1080/1/2/LFPjy5.jpg',
  about:
    'Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.',
  profession: 'Freelance UX/UI',
  photo:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg',
  location: 'Malibu, California, USA',
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
  message: string;
};

const postData: PostDataType[] = [
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
];

// ##################### ***App*** #######################

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routing
          userProfile={userProfile}
          posts={postData}
          messagesData={messagesData}
          dialogData={dialogData}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
