let BASE_URL = process.env.REACT_APP_API_BASE_URL;
let BASE_HOST = process.env.REACT_APP_API_BASE_HOST;

let endpoints = {
  auth: {
    login: `${BASE_HOST}/${BASE_URL}/auth/login`,
    signup: `${BASE_HOST}/${BASE_URL}/auth/signup`,
    validateToken: `${BASE_HOST}/${BASE_URL}/auth/validate-token`,
  },
  twits: {
    manage: {
      create: `${BASE_HOST}/${BASE_URL}/twits/create-twit`,
      fetch: (postId: any) => `${BASE_HOST}/${BASE_URL}/twit/${postId}`,
      fetchAll: `${BASE_HOST}/${BASE_URL}/twits/list-twits`,
      fetchComments: (postId: any) => `${BASE_HOST}/${BASE_URL}/twits/${postId}/list-comments`,
      delete: `${BASE_HOST}/${BASE_URL}/twits/delete-twit`,
    },
    actions: {
      like: (postId: any) => `${BASE_HOST}/${BASE_URL}/twits/${postId}/like`,
      comment: (postId: any) => `${BASE_HOST}/${BASE_URL}/twits/${postId}/add-comment`,
    },
  },
};

//removed modules.exports for Typescript due to --isolatedModules error
export { endpoints, BASE_URL };
