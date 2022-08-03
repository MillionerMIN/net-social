import './loader.scss';

const Loader = () => {
  return (
    <div className='loader--container'>
      <div className='loader'>
        <div className='loader--item'></div>
        <div className='loader--item'></div>
        <div className='loader--item'></div>
        <div className='loader--item'></div>
        <div className='loader--item'></div>
        <div className='loader--item'></div>
        <div className='loader--text'></div>
      </div>
    </div>
  );
};

export default Loader;
