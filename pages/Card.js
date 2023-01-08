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
      <div className='remove-btn-cnt'>
        <button
          className='remove-btn'
          onClick={(id) => {
            handleRemove(data.id);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-x-circle'
            viewBox='0 0 16 16'
          >
            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </button>
      </div>
      <div>
        {' '}
        <p className='card-title'>{data.title}</p>
        <p className='card-amount'>Amount: {data.quantity}</p>
        <p className='card-price'>Price:{data.price * count}</p>
      </div>
      <div className='in-de-btn-cnt'>
        <button className='decrement-btn' onClick={decrementCount}>
          -
        </button>
        {count ? <p>{count}</p> : null}
        <button className='increment-btn' onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
