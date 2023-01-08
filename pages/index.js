import MainPage from './MainPage';
import Nav from './Nav';

import { useState, useEffect, useRef } from 'react';

const index = () => {
  const [isTimer, setIsTimer] = useState(true);
  const ref = useRef(10);

  const handleTimer = () => {
    if (isTimer == true) {
      ref.current = ref.current - 1;
    }
    if (ref.current == 0) {
      setIsTimer(false);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleTimer();
    }, 1000);
    if (ref.current == 0) {
      clearInterval(interval);
    }
    console.log(ref.current);
  }, [ref]);

  return (
    <>
      <Nav />
      <MainPage time={ref.current} />
    </>
  );
};

export default index;
