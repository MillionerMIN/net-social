import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { StateType } from './redux/state';
import Routing from './routes/Routing';

// ##################### ***App*** #######################

type AppPropsType = {
  state: StateType;
  dispatch: (action: { type: string; payload?: string }) => void;
};

function App(props: AppPropsType) {
  const { state, dispatch } = props;
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routing state={state} dispatch={dispatch} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
