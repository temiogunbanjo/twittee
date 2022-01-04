import { useContext, useState } from 'react';
// import TextInput from '../common/TextInput';
import axios, { AxiosResponse } from 'axios';
import { AppContext } from '../../context/AppContext';
import { isFormValidated } from '../../utils/formUtils';
import { loginDTO } from '../../interfaces/AuthInterface';
import { endpoints } from '../../utils/urls';
import setAuthToken from '../../utils/setAuthToken';
import { addToast } from '../../utils/toastNotifications';
import ButtonLoader from '../common/ButtonLoader';

const Main = () => {
  const [localState, setLocalState] = useState(loginDTO);
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
    let url = `${endpoints.auth.login}`;
    console.log(url);

    const payload = {
      email: localState.email,
      password: localState.password,
    };
    try {
      const response = await axios.post(url, payload);
      console.log(response);
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
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDetails = async (responseData: any) => {
    try {
      const token = responseData.data.data.token;
      const url = `${endpoints.auth.validateToken}/?token=${token}`;

      console.log(token);

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

          <div className='d-flex flex-direction-row align-items-center my-4'>
            <input type='checkbox' name='' id='keep-signed-in' className='position-relative ' />
            <label htmlFor=''>
              <b>Keep me signed in</b>
            </label>
          </div>

          <button onClick={signIn} className='action-btn'>
            {isLoading ? <ButtonLoader /> : 'Log in'}
          </button>

          <div className='d-flex flex-direction-row align-items-center justify-content-center my-2'>
            <a href='/register'>Create account instead</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Main;
