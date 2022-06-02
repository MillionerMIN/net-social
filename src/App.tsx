import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { StoreType } from './redux/state';
import Routing from './routes/Routing';

// ##################### ***App*** #######################

type AppPropsType = {
  store: StoreType;
};

function App(props: AppPropsType) {
  const { store } = props;
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routing store={store} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
