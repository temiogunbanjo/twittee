import { useState } from 'react';
import axios from 'axios';

import { isFormValidated } from '../../utils/formUtils';
import { signupDTO } from '../../interfaces/AuthInterface';
import { endpoints } from '../../utils/urls';

import { addToast } from '../../utils/toastNotifications';
import ButtonLoader from '../common/ButtonLoader';
import React from 'react';
import { getResponseData } from '../../utils/handleAPIResponse';

axios.defaults.withCredentials = true;

const Main = () => {
  const [localState, setLocalState] = useState(signupDTO);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (input: string) => (event: any) => {
    setLocalState({
      ...localState,
      [input]: event.target.value,
    });
  };

  const labelStyles = {
    display: 'block',
  };

  const signUp = async (event: any) => {
    //login
    if (!isFormValidated('signup-form')) {
      return;
    }

    event.preventDefault();
    setIsLoading(true);
    //if login success, get user detail
    let url = `${endpoints.auth.signup}`;

    const payload = {
      email: localState.email,
      password: localState.password,
      confirmPassword: localState.confirmPassword,
    };

    try {
      const response: any = await axios.post(url, payload);
      // console.log(response);
      const responseData = getResponseData(response);
      if (responseData) {
        addToast(responseData.message, 'success');
        addToast('redirecting to login...', 'info');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } catch (error: any) {
      addToast(`${error}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center p-5 content'
        style={{ minHeight: '100vh', backgroundColor: 'white' }}
      >
        <form
          id='signup-form'
          className='styled d-flex align-items-center justify-content-center border'
          style={{ flexDirection: 'column' }}
        >
          <h1
            className='pt-5 pb-4 my-2 text-center'
            style={{ color: 'var(--primary-color)', letterSpacing: '-1px' }}
          >
            <b>Twittee!</b>
          </h1>
          <div className='position-relative custom-input my-3'>
            <input
              id='email-input'
              name='email'
              type='email'
              placeholder=' '
              required={true}
              value={localState.email}
              className='custom-input'
              onChange={handleChange('email')}
            />
            <label
              htmlFor='email-input'
              className='custom-input-label position-absolute'
              style={labelStyles}
            >
              Email address
            </label>
          </div>

          <div className='position-relative custom-input my-3'>
            <input
              id='password-input'
              name='password'
              type='password'
              placeholder=' '
              required={true}
              value={localState.password}
              className='custom-input'
              onChange={handleChange('password')}
            />
            <label
              htmlFor='password-input'
              className='custom-input-label position-absolute'
              style={labelStyles}
            >
              Password
            </label>
          </div>

          <div className='position-relative custom-input my-3'>
            <input
              id='confirm-password-input'
              name='confirmPassword'
              type='password'
              placeholder=' '
              required={true}
              value={localState.confirmPassword}
              className='custom-input'
              onChange={handleChange('confirmPassword')}
            />
            <label
              htmlFor='confirm-password-input'
              className='custom-input-label position-absolute'
              style={labelStyles}
            >
              Confirm Password
            </label>
          </div>

          <button onClick={signUp} className='action-btn'>
            {isLoading ? <ButtonLoader /> : 'Register'}
          </button>

          <div className='d-flex flex-direction-row align-items-center justify-content-center my-2'>
            <a href='/'>Back to Login</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Main;
