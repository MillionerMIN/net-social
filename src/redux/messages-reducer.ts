import Photo_1 from '../assets/images/friends/Photo_1.jpg';
import Photo_2 from '../assets/images/friends/Photo_2.jpg';
import Photo_3 from '../assets/images/friends/Photo_3.jpg';
import Photo_4 from '../assets/images/friends/Photo_4.jpg';
import Photo_5 from '../assets/images/friends/Photo_5.jpg';
import { MessagePageType } from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState: MessagePageType = {
  dialogData: [
    { id: '1', name: 'Theresa Steward', photo: Photo_1 },
    { id: '2', name: 'Darlene Black', photo: Photo_2 },
    { id: '3', name: 'Brandon Wilson', photo: Photo_3 },
    { id: '4', name: 'Kyle Fisher', photo: Photo_4 },
    { id: '5', name: 'Audrey Alexander', photo: Photo_5 },
  ],

  messagesData: ['Hi', 'Let`s tell with you', 'Go', 'What does you do?', 'gi'],
  newMessageChat: '',
};

const messagesReducer = (
  state = initialState,
  action: AddMessageActionType | UpdateMessageTextActionType
) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      state.messagesData.push(action.payload as string);
      return state;
    }
    case UPDATE_MESSAGE_TEXT: {
      state.newMessageChat = action.payload as string;
      return state;
    }

    default:
      return state;
  }
};

//added action for Messages
export const addMessageAC = (newMessage: string) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
});
export const updateMessageTextAC = (text: string) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text,
});

export type AddMessageActionType = ReturnType<typeof addMessageAC>;
export type UpdateMessageTextActionType = ReturnType<
  typeof updateMessageTextAC
>;
export default messagesReducer;
