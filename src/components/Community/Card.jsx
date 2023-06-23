/* eslint-disable react/prop-types */
const Card = ({ src, alt, title, desc }) => {
  return (
    <div className="cardCommunity">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
