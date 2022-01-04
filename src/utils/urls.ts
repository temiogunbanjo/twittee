let BASE_URL = process.env.REACT_APP_AUTHSERVICE_BASE_URL;

let endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    validateToken: `${BASE_URL}/auth/validate-token`,
  },
};

//removed modules.exports for Typescript due to --isolatedModules error
export { endpoints, BASE_URL };
