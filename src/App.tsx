import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { StateType } from './redux/state';
import Routing from './routes/Routing';

// ##################### ***App*** #######################

type AppPropsType = {
  state: StateType;
  addPost: () => void;
  updatePostText: (text: string | null) => void;
};

function App(props: AppPropsType) {
  const { state, addPost, updatePostText } = props;
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routing
          state={state}
          addPost={addPost}
          updatePostText={updatePostText}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
