import './layout.scss';

import { ReactNode } from 'react';

type LayoutPropsType = {
  position?: 'right' | undefined;
  children: ReactNode;
};

const Layout = (props: LayoutPropsType) => {
  const { children, position } = props;

  const classes = position === 'right' ? 'layout layout-right' : 'layout';
  return <div className={classes}>{children}</div>;
};

export default Layout;
