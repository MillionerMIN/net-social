import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routing from './routes/Routing';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
