/* eslint-disable react/prop-types */
import './button.css';

const Button = ({ innerText, type, size }) => {
  return <button className={type + ' ' + size}>{innerText}</button>;
};

export default Button;
