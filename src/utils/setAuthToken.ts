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
    // console.log({error: error.response});
    toggleSpinner('hide');

    switch (true) {
      case error.response && error.response.status === 500:
        addToast('There is a server error, Please try again or contact admin', 'error');
        return error.response.data;

      case error.response && (error.response.status === 400 || error.response.status === 404):
        addToast(`${error.response.data.responsemessage}`, 'error');
        return error.response.data;

      case error.response && error.response.status === 401:
        if (error.response.config.url.includes('/auth/login')) {
          const message = error.response.data.responsemessage
            ? error.response.data.responsemessage
            : error;
          return Promise.reject(message);
        } else {
          window.location.href = '/';
          return error.response.data;
        }

      default:
        return Promise.reject(error);
    }
  }
);

export default setAuthToken;
