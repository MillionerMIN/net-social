import { MessagePageType } from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const messagesReducer = (
  state: MessagePageType,
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
