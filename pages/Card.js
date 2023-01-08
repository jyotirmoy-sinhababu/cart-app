import { useState } from 'react';

const Card = ({ data, handleRemove }) => {
  let [count, setCount] = useState(data.quantity);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='card-cnt'>
      <div>
        {' '}
        <p>{data.title}</p>
        <p className='card-amount'>Amount: {data.quantity}</p>
        <p className='card-price'>Price:{data.price * count}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <button className='decrement-btn' onClick={decrementCount}>
          -
        </button>
        {count ? <p>{count}</p> : null}
        <button className='increment-btn' onClick={incrementCount}>
          +
        </button>
      </div>
      <div>
        <button
          className='remove-btn'
          onClick={(id) => {
            handleRemove(data.id);
          }}
        >
          Remove item
        </button>
      </div>
    </div>
  );
};

export default Card;
