import './header.scss';

import { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';

import Logo from '../../assets/icons/logo.png';
import { NavBar } from '../navBar/NavBar';

const Header = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const switchButton = theme === 'light' ? <FaMoon /> : <FaRegSun />;
  return (
    <header className='header header-pd'>
      <div className='container'>
        <div className='header--grid'>
          <img className='header--logo' src={Logo} alt='logo' />
          <NavBar />
          <div>search</div>
          <div>avatar</div>
          <div className='header--switch' onClick={switchTheme}>
            {switchButton}
            <h6>{theme}</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
