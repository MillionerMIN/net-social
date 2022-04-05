import './navBar.scss';

import { FaRss } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation--grid'>
        <li>
          <a href='#'>
            <FaRss width={'100%'} />
            <h6 className='navigation--title'>feed</h6>
          </a>
        </li>
        <li>
          <a href='#'>
            <FaRss />
            <h6 className='navigation--title'>network</h6>
          </a>
        </li>
        <li>
          <a href='#'>
            <FaRss />
            <h6 className='navigation--title'>jobs</h6>
          </a>
        </li>
        <li>
          <a href='#'>
            <FaRss />
            <h6 className='navigation--title'>chat</h6>
          </a>
        </li>
        <li>
          <a href='#'>
            <FaRss />
            <h6 className='navigation--title'>notice</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
