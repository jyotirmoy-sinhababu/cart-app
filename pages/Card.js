import { useState } from 'react';

const Card = ({ data, handleRemove }) => {
  let [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        {' '}
        <p>{data.title}</p>
        <p>{data.quantity}</p>
        <p>{data.price * count}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={decrementCount}>-</button>
        {count ? <p>{count}</p> : null}
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        <button
          onClick={(id) => {
            handleRemove(data.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
