import './viewCounter.scss';

type ViewCounterPropsType = {
  counter?: number;
  span?: string;
};

const ViewCounter = (props: ViewCounterPropsType) => {
  const { counter = 0, span = 'default' } = props;
  // const [value, setValue] = useState<number>(counter);
  return (
    <div className='view view-mr view-pd'>
      <div className='view--counter'>{counter}</div>
      <span className='view--description'>{span}</span>
    </div>
  );
};

export default ViewCounter;
