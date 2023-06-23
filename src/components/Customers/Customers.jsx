import Subtitle from '../Subtitle/Subtitle';
import './Customers.css';
import logo from '../../assets/customers/Logo.svg';
import logo1 from '../../assets/customers/Logo-1.svg';
import logo2 from '../../assets/customers/Logo-2.svg';
import logo3 from '../../assets/customers/Logo-3.svg';
import logo4 from '../../assets/customers/Logo-4.svg';
import logo5 from '../../assets/customers/Logo-5.svg';
import logo6 from '../../assets/customers/Logo-6.svg';

const Customers = () => {
  return (
    <section className="customers-container">
      <Subtitle text="Our clients" size="3rem" align="center" />
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="customers-logos">
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
    </section>
  );
};
export default Customers;
