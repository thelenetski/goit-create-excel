import css from './Logo.module.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className={css.logoWrap}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
