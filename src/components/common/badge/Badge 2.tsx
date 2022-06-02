import './badge.scss';

import { ReactNode } from 'react';

type BadgePropsType = {
  state?: 'online' | 'unOnline' | 'move' | 'none';
  children: ReactNode;
};

const Badge = (props: BadgePropsType) => {
  const { state, children } = props;

  return <div className={`badge-custom badge-custom-${state}`}>{children}</div>;
};

export default Badge;
