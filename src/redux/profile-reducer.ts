import { ProfilePageType } from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (
  state: any,
  action: AddPostActionType | UpdatePostActionType
) => {
  switch (action.type) {
    case ADD_POST: {
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
        message: action.payload,
      };
      state.postData.push(newPost);
      state.newMessagePost = '';
      return state;
    }
    case UPDATE_POST_TEXT:
      state.newMessagePost = action.payload;
      return state;
    default:
      return state;
  }
};

//added action creator for Post
export const addPostAC = (newPost: string) => ({
  type: ADD_POST,
  payload: newPost,
});
export const updatePostTextAC = (text: string) => ({
  type: UPDATE_POST_TEXT,
  payload: text,
});

export type AddPostActionType = ReturnType<typeof addPostAC>;

export type UpdatePostActionType = ReturnType<typeof updatePostTextAC>;

export default profileReducer;
