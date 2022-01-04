import React from 'react';

const DashboardMain = () => {
  return (
    <div className='dashboard-section-container'>
      <div className='dashboard-section'>
        <h2 className='content-heading' style={{ fontWeight: 700 }}>
          My Dashboard
        </h2>
        <div
          className='summary-container d-flex flex-row justify-content-around flex-wrap'
          style={{ marginTop: '42px' }}
        >
          <div className='card flex-row p-3 m-2 align-items-end'>
            <div className='card-body d-flex flex-column p-0 me-1 align-self-stretch justify-content-between'>
              <h6 className='card-title' style={{ fontWeight: 600, fontSize: '14px' }}>
                Revenue
              </h6>
              <b className='card-text py-1' style={{ fontWeight: 700, fontSize: '16px' }}>
                N255,000
              </b>
            </div>

            <div
              className='d-flex align-items-center justify-content-center card-img icon-holder'
              style={{
                width: '65px',
                height: '60px',
              }}
            >
              <img
                src=''
                alt='icon'
              />
            </div>
          </div>

          <div className='card flex-row p-3 m-2 align-items-end'>
            <div className='card-body d-flex flex-column p-0 me-1 align-self-stretch justify-content-between'>
              <h6 className='card-title' style={{ fontWeight: 600, fontSize: '14px' }}>
                Deals Processed
              </h6>
              <b className='card-text py-1' style={{ fontWeight: 700, fontSize: '16px' }}>
                30,000
              </b>
            </div>
            <div
              className='d-flex align-items-center justify-content-center card-img icon-holder'
              style={{
                width: '65px',
                height: '60px',
              }}
            >
              <img
                src=''
                // alt='icon'
              />
            </div>
          </div>

          <div className='card flex-row p-3 m-2 align-items-end'>
            <div className='card-body d-flex flex-column p-0 me-1 align-self-stretch justify-content-between'>
              <h6 className='card-title' style={{ fontWeight: 600, fontSize: '14px' }}>
                Unique Users
              </h6>
              <b className='card-text py-1' style={{ fontWeight: 700, fontSize: '16px' }}>
                56,890
              </b>
            </div>
            <div
              className='d-flex align-items-center justify-content-center card-img icon-holder'
              style={{
                width: '65px',
                height: '60px',
              }}
            >
              <img
                src=''
                // alt="icon"
              />
            </div>
          </div>

          <div className='card flex-row p-3 m-2 align-items-end'>
            <div className='card-body d-flex flex-column p-0 me-1 align-self-stretch justify-content-between'>
              <h6 className='card-title word-wrap' style={{ fontWeight: 600, fontSize: '14px' }}>
                Number of Transactions
              </h6>
              <b className='card-text py-1' style={{ fontWeight: 700, fontSize: '16px' }}>
                N1,678,000
              </b>
            </div>
            <div
              className='d-flex align-items-center justify-content-center card-img icon-holder'
              style={{
                width: '65px',
                height: '60px',
              }}
            >
              <img
                src=''
                // alt='icon'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='dashboard-section new-entries'>
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
      </div>
    </div>
  );
};

export default DashboardMain;
