/* eslint-disable react/prop-types */
const Subtitle = ({ text, size, align }) => {
  return (
    <h2
      style={{
        fontSize: `${size}`,
        fontWeight: '600',
        color: '#263238',
        textAlign: `${align}`,
      }}
    >
      {text}
    </h2>
  );
};

export default Subtitle;
