import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getResponseData } from '../../utils/handleAPIResponse';
import { addToast } from '../../utils/toastNotifications';
import { endpoints } from '../../utils/urls';
import Twit from '../common/Twit';

const DashboardMain = () => {
  const [twits, setTwits] = useState([]);

  const fetchAllTwits = async () => {
    let url = `${endpoints.twits.manage.fetchAll}`;
    console.log(url);

    try {
      const response: any = await axios.get(url);
      const responseData = getResponseData(response);
      if (responseData) {
        addToast(responseData.message || 'Twits loaded successfully', 'success');
        setTwits(responseData.payload);
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
          {twits.map((eachTwit: any) => (
            <Twit
              uuid={eachTwit.uuid || '1'}
              image={eachTwit.image || ''}
              posterName={eachTwit.posterName || ''}
              numberOfLikes={eachTwit.numberOfLikes || 5}
              caption={eachTwit.caption || ''}
              createdAt={eachTwit.createdAt || ''}
            />
          ))}
          {/* <Twit uuid={"1"} image={""} posterName={""} numberOfLikes={5} caption={""} createdAt={""} /> */}
        </div>
      </div>

      {/* <div className='dashboard-section new-entries'>
        <div className='entries-container d-flex justify-content-center'>
          <div className='card py-4 px-4 justify-content-between'>
            <div className='card-title d-flex justify-content-between align-items-end'>
              <span>New Merchant Request</span>
              <img
                src={require('../../assets/ArrowRight.svg').default}
                alt='caution'
                className='ms-3 mb-1'
              />
            </div>
            <div className='card-body justify-content-between mt-auto p-0'>
              <b style={{ fontSize: '50px', fontWeight: 700 }}>52</b>
              <div className='notice'></div>
              <label
                htmlFor='a'
                className='d-flex align-items-end card-filter'
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ABA7A7',
                  letterSpacing: '0.03em',
                }}
              >
                <select
                  id='a'
                  style={{
                    appearance: 'none',
                    color: 'inherit',
                    fontWeight: 'inherit',
                    border: 'none',
                  }}
                >
                  <option>THIS WEEK</option>
                  <option>THIS MONTH</option>
                  <option>THIS YEAR</option>
                </select>
                <img
                  src={require('../../assets/SmallArrowDown.svg').default}
                  alt='caution'
                  className='ms-2 mb-2'
                />
              </label>
            </div>
          </div>

          <div className='card py-4 px-4 justify-content-between'>
            <div className='card-title d-flex justify-content-between align-items-end'>
              <span>New Transactions</span>
              <img
                src={require('../../assets/ArrowRight.svg').default}
                alt='caution'
                className='ms-3 mb-1'
              />
            </div>
            <div className='card-body justify-content-between mt-3 p-0'>
              <b style={{ fontSize: '50px', fontWeight: 700 }}>128</b>
              <div className='notice d-flex'>
                <img
                  src={require('../../assets/CautionRed.svg').default}
                  alt='caution'
                  className='notice-icon'
                />
                <span className='notice-text'>5 transactions require your attention</span>
              </div>
              <label
                htmlFor='b'
                className='d-flex align-items-end card-filter'
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ABA7A7',
                  letterSpacing: '0.03em',
                }}
              >
                <select
                  id='b'
                  style={{
                    appearance: 'none',
                    color: 'inherit',
                    fontWeight: 'inherit',
                    border: 'none',
                  }}
                >
                  <option>THIS WEEK</option>
                  <option>THIS MONTH</option>
                  <option>THIS YEAR</option>
                </select>
                <img
                  src={require('../../assets/SmallArrowDown.svg').default}
                  alt='caution'
                  className='ms-2 mb-2'
                />
              </label>
            </div>
          </div>

          <div className='card py-4 px-4 justify-content-between'>
            <div className='card-title d-flex align-items-end'>
              <span>New Deal Requests</span>
              <img
                src={require('../../assets/ArrowRight.svg').default}
                alt='caution'
                className='ms-3 mb-1'
              />
            </div>
            <div className='card-body justify-content-between mt-3 p-0'>
              <b style={{ fontSize: '50px', fontWeight: 700 }}>47</b>
              <div className='notice'></div>
              <label
                htmlFor='c'
                className='d-flex align-items-end card-filter'
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ABA7A7',
                  letterSpacing: '0.03em',
                }}
              >
                <select
                  id='c'
                  style={{
                    appearance: 'none',
                    color: 'inherit',
                    fontWeight: 'inherit',
                    border: 'none',
                  }}
                >
                  <option>THIS WEEK</option>
                  <option>THIS MONTH</option>
                  <option>THIS YEAR</option>
                </select>
                <img
                  src={require('../../assets/SmallArrowDown.svg').default}
                  alt='caution'
                  className='ms-2 mb-2'
                />
              </label>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardMain;
