let BASE_URL = process.env.REACT_APP_API_BASE_URL;

let endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    validateToken: `${BASE_URL}/auth/validate-token`,
  },
  twits: {
    manage: {
      create: `${BASE_URL}/twits/create-twit`,
      fetch: `${BASE_URL}/twit/:postId`,
      fetchAll: `${BASE_URL}/twits/list-twits`,
      delete: `${BASE_URL}/twits/delete-twit`,
    },
    actions: {
      like: `${BASE_URL}/auth/login`,
      comment: `${BASE_URL}/auth/login`,
    },
  },
};

//removed modules.exports for Typescript due to --isolatedModules error
export { endpoints, BASE_URL };
