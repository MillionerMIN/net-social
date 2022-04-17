import './layout.scss';

import { ReactNode } from 'react';

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = (props: LayoutPropsType) => {
  const { children } = props;
  return <div className='layout'>{children}</div>;
};

export default Layout;
