import './navbar.scss';

import { BsFillMusicPlayerFill, BsPersonBadge } from 'react-icons/bs';
import { FaNewspaper, FaRss } from 'react-icons/fa';
import { FiMessageSquare, FiSettings } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation--grid'>
        <li className='navigation--item'>
          <a className='navigation--link' href='#'>
            <BsPersonBadge width={'100%'} />
            <h6 className='navigation--title'>profile</h6>
          </a>
        </li>
        <li className='navigation--item'>
          <a className='navigation--link' href='#'>
            <FiMessageSquare />
            <h6 className='navigation--title'>messages</h6>
          </a>
        </li>
        <li className='navigation--item'>
          <a className='navigation--link' href='#'>
            <FaNewspaper />
            <h6 className='navigation--title'>news</h6>
          </a>
        </li>
        <li className='navigation--item'>
          <a className='navigation--link' href='#'>
            <BsFillMusicPlayerFill />
            <h6 className='navigation--title'>Music</h6>
          </a>
        </li>
        <li className='navigation--item'>
          <a className='navigation--link' href='#'>
            <FiSettings />
            <h6 className='navigation--title'>setting</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
