import './sidebar.scss';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SidebarPropsType = {
  title?: string;
  link?: {
    value: string;
    href: string;
  };
  children?: ReactNode;
};

const Sidebar = (props: SidebarPropsType) => {
  const {
    title = 'your dashboard',
    link = { value: 'go to stats', href: '#' },
    children,
  } = props;
  return (
    <section className='sidebar sidebar-pd'>
      <div className='sidebar--header'>
        <h6 className='sidebar--title'>{title}</h6>
        <Link className='sidebar--link' to={link.href}>
          <span>{link.value}</span>
        </Link>
      </div>
      <div className='sidebar--body'>{children}</div>
    </section>
  );
};

export default Sidebar;
