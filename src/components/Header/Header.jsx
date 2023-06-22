import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <nav className="nav-main">
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#feature">Features</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <Button
          type="primaryButton"
          size="buttonLarge"
          innerText="Register Now →"
        />
      </nav>
    </header>
  );
};

export default Header;
