import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getResponseData } from '../../utils/handleAPIResponse';
import { addToast } from '../../utils/toastNotifications';
import { endpoints } from '../../utils/urls';
import Twit from '../common/Twit';

axios.defaults.withCredentials = true;

const DashboardMain = () => {
  const [twits, setTwits] = useState([]);

  const fetchAllTwits = async () => {
    let url = `${endpoints.twits.manage.fetchAll}`;
    // console.log(url);

    try {
      const response: any = await axios.get(url);
      const responseData = getResponseData(response);
      if (responseData) {
        addToast(responseData.message || 'Twits loaded successfully', 'success');
        setTwits(responseData.payload);
        console.log(responseData.payload);
      }
    } catch (error: any) {
      addToast(error.message || error, 'error');
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchAllTwits();
    })();
  }, []);

  return (
    <div className='dashboard-section-container'>
      <div className='dashboard-section'>
        <h2 className='content-heading' style={{ fontWeight: 700 }}>
          My Posts
        </h2>
        <div
          className='summary-container d-flex flex-row justify-content-around flex-wrap'
          style={{ marginTop: '42px' }}
        >
          {(twits.length === 0) ?
            <div></div>
            : twits.map((eachTwit: any, index: number) => (
            <Twit
              key={index}
              uuid={eachTwit.uuid || '1'}
              image={eachTwit.image || ''}
              posterName={eachTwit.posterName || ''}
              numberOfLikes={eachTwit.numberOfLikes}
              caption={eachTwit.caption || ''}
              owner={eachTwit.userId || ''}
              createdAt={eachTwit.createdAt || ''}
            />
          ))}
          {/* <Twit uuid={"1"} image={""} posterName={""} numberOfLikes={5} caption={""} createdAt={""} /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
