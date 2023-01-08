import Nav from './Nav';
import Index from '../pages/mainPage/Index';

import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/carts/2');
  const apiData = await res.json();

  return { props: { apiData } };
}

const index = ({ apiData }) => {
  console.log(apiData);

  return (
    <>
      <Nav />
      <Index apiData={apiData} />
    </>
  );
};

export default index;
