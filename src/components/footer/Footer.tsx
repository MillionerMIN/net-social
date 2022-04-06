import './footer.scss';

import Logo from '../../assets/icons/logo.png';

const Footer = () => {
  return (
    <footer className='footer footer-position'>
      <div className='container'>
        <div className='footer--wrapper'>
          <div>
            <img className='header--logo' src={Logo} alt='logo' />
          </div>
          <div>navigation</div>
          <div>Fast access</div>
          <div>Language</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
