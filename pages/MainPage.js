import Card from './Card';

import axios from 'axios';

import { useState, useEffect } from 'react';

const MainPage = () => {
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

  return (
    <>
      {apiData?.map((item) => {
        return (
          <div key={item.id}>
            {' '}
            <Card data={item} handleRemove={handleRemove} />
          </div>
        );
      })}
    </>
  );
};

export default MainPage;
