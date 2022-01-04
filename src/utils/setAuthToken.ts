import axios from 'axios';
import { addToast } from './toastNotifications';

const toggleSpinner = (spinnerState: string) => {
  const spinner = document.getElementById('request-spinner');

  if (spinner) {
    if (spinnerState.includes('show')) {
      spinner.style.display = 'inline-block';
    } else {
      spinner.style.display = 'none';
    }
  }
};
// //add token to all request
axios.interceptors.request.use(
  function (config) {
    if (config.method === 'get') {
      toggleSpinner('show');
    }
    return config;
  },
  function (error) {
    toggleSpinner('hide');
    Promise.reject(error);
  }
);

const setAuthToken = (token?: any) => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    //delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Add a 401 response0
axios.interceptors.response.use(
  (response) => {
    toggleSpinner('hide');
    return response;
  },
  (error) => {
    toggleSpinner('hide');

    if ((error.response && error.response.status) === 500) {
      addToast('There is a server error, Please contact admin. Code 500.', 'error');
    }

    if ((error.response && error.response.status) === 400) {
      addToast(
        'There is a problem with your request, check your payload and contact admin. Code 400',
        'error'
      );
    }

    if ((error.response && error.response.status) === 404) {
      addToast(error.response.data.detail, 'error');
    }

    if ((error.response && error.response.status) === 409) {
      addToast(error.response.data.detail.toString(), 'error');
    }

    if ((error.response && error.response.status) === 401) {
      //if we are on the login page, return promise so the calling page can handle
      if (error.response.config.url.includes('/auth/token')) {
        return Promise.reject(error);
      }

      window.location.href = '/';
      return false;
    } else {
      return Promise.reject(error);
    }
  }
);

export default setAuthToken;
