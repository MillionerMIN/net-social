import './viewCounter.scss';

import { useState } from 'react';

type ViewCounterPropsType = {
  counter?: number;
  span?: string;
};

const ViewCounter = (props: ViewCounterPropsType) => {
  const { counter = 0, span = 'default' } = props;
  const [value, setValue] = useState<number>(counter);
  return (
    <div className='view view-mr'>
      <div className='view--counter'>{value}</div>
      <span className='view--description'>{span}</span>
    </div>
  );
};

export default ViewCounter;
