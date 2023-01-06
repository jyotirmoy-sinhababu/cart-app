const Card = ({ data }) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.quantity}</p>
      <p>{data.price}</p>
    </div>
  );
};

export default Card;
