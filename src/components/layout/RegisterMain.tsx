import { useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AppContext } from '../../context/AppContext';
import { isFormValidated } from '../../utils/formUtils';
import { signupDTO } from '../../interfaces/AuthInterface';
import { endpoints } from '../../utils/urls';
import setAuthToken from '../../utils/setAuthToken';
import { addToast } from '../../utils/toastNotifications';
import ButtonLoader from '../common/ButtonLoader';

const Main = () => {
  const [localState, setLocalState] = useState(signupDTO);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(AppContext);

  const handleChange = (input: string) => (event: any) => {
    setLocalState({
      ...localState,
      [input]: event.target.value,
    });
  };

  const labelStyles = {
    display: 'block',
  };

  const signIn = async (event: any) => {
    //login
    if (!isFormValidated('login-form')) {
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
      const response = await axios.post(url, payload);
      const tokenData: any = response.data;

      const tokenDataDetail = tokenData.detail;
      if (tokenData.status === 401) {
        addToast(tokenDataDetail, 'error');
      }

      dispatch({
        type: 'SET_TOKEN',
        payload: tokenData.data.token,
      });

      setAuthToken(tokenData.data.token);

      //get user details
      await getUserDetails(response);
    } catch (error: any) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDetails = async (responseData: any) => {
    const token = responseData.data.data.token;
    const url = `${endpoints.auth.validateToken}/?token=${token}`;

    console.log(token);

    try {
      const response: AxiosResponse<any> = await axios.post(url);
      console.log(response.data.data);
      //set in state
      dispatch({
        type: 'SET_USER',
        payload: response.data.data,
      });

      //go to dashbaord
      window.location.href = '/dashboard';
    } catch (error) {
      addToast('User not found.', 'error');
    } finally {
    }
  };

  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center p-5 content'
        style={{ minHeight: '100vh', backgroundColor: 'white' }}
      >
        <form
          id='login-form'
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

          <button onClick={signIn} className='action-btn'>
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
