import Card from './Card';

import axios from 'axios';

import { useState, useEffect } from 'react';

const MainPage = ({ time }) => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    axios.get('https://dummyjson.com/carts/2').then((res) => {
      console.log(res.data.products);
      setApiData(res.data.products);
    });
  }, []);

  const handleRemove = (id) => {
    if (apiData) {
      const filteredData = apiData.filter((item) => {
        return item.id != id;
      });
      setApiData(filteredData);
    }
  };

  const handleCheck = () => {
    window.print();
  };

  return (
    <>
      <div className='main-card-cnt'>
        {' '}
        {apiData?.map((item) => {
          return (
            <div key={item.id}>
              {' '}
              <Card data={item} handleRemove={handleRemove} />
            </div>
          );
        })}
      </div>
      <div className='check-btn-cnt'>
        {' '}
        <button id='checkBtn' onClick={handleCheck}>
          checkout {time}
        </button>
      </div>
    </>
  );
};

export default MainPage;
