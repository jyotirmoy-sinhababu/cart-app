import Card from '../Card';
import Loading from '../Loading';

import { useState, useEffect } from 'react';

const MainPage = ({ apiData }) => {
  const [time, setTime] = useState();
  const [startTimer, setStartTimer] = useState(true);

  useEffect(() => {
    if (startTimer) {
      let minute = 10;
      let second = 0;

      let timerInterval = setInterval(() => {
        if (minute == 0) {
          if (second == 0) {
            clearInterval(timerInterval);
            setStartTimer(false);
            document.getElementById('checkBtn').disable = true;
          } else second--;
        }
        if (minute > 0) {
          if (second <= 0) {
            minute = minute - 1;
            second = 59;
          } else second--;
        }

        let seconds = second < 10 ? `0${second}` : second;

        setTime(`${minute}:${seconds}`);
      }, 1000);
    }
  }, [startTimer]);

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
        {apiData ? (
          apiData?.products.map((item) => {
            return (
              <div key={item.id}>
                {' '}
                <Card data={item} handleRemove={handleRemove} />
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className='check-btn-cnt'>
        {' '}
        <button id='checkBtn' onClick={handleCheck}>
          checkout <p>{time} minutes</p>
        </button>
      </div>
    </>
  );
};

export default MainPage;
