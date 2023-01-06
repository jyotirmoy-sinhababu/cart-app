import Card from './Card';

import axios from 'axios';

import { useState } from 'react';

const MainPage = () => {
  const [apiData, setApiData] = useState();
  const getData = async () => {
    try {
      await axios.get('https://dummyjson.com/carts/2').then((res) => {
        console.log(res.data.products);
        setApiData(res.data.products);
      });
    } catch (err) {}
  };
  getData();

  return (
    <div>
      <Card data={apiData} />
    </div>
  );
};

export default MainPage;
