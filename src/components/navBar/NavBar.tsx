import './navBar.scss';

import { BsFillMusicPlayerFill, BsPersonBadge } from 'react-icons/bs';
import { FaNewspaper } from 'react-icons/fa';
import { FiMessageSquare, FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation--grid'>
        <li className='navigation--item'>
          <NavLink className='navigation--link' to='/profile'>
            <BsPersonBadge />
            <h6 className='navigation--title'>profile</h6>
          </NavLink>
        </li>
        <li className='navigation--item'>
          <NavLink className='navigation--link' to='/messages'>
            <FiMessageSquare />
            <h6 className='navigation--title'>messages</h6>
          </NavLink>
        </li>
        <li className='navigation--item'>
          <NavLink className='navigation--link' to='/news'>
            <FaNewspaper />
            <h6 className='navigation--title'>news</h6>
          </NavLink>
        </li>
        <li className='navigation--item'>
          <NavLink className='navigation--link' to='/Music'>
            <BsFillMusicPlayerFill />
            <h6 className='navigation--title'>music</h6>
          </NavLink>
        </li>
        <li className='navigation--item'>
          <NavLink className='navigation--link' to='/setting'>
            <FiSettings />
            <h6 className='navigation--title'>setting</h6>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
