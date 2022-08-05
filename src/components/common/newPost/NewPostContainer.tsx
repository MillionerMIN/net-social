import { addPostAC } from '../../../redux/profile-reducer';
import { ActionType } from '../../../redux/state';
import NewPost from './NewPost';

type NewPostPropsType = {
  dispatch: (action: ActionType) => void;
  newPostText: string;
};

const NewPostContainer = (props: NewPostPropsType) => {
  const { dispatch, newPostText = 'it-kamasutra' } = props;
  const addPostHandler = (text: string) => {
    dispatch(addPostAC(text));
  };

  return <NewPost onAddPost={addPostHandler} newPostText={newPostText} />;
};

export default NewPostContainer;
