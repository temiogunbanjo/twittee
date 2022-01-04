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
      fetch: (postId: any) => `${BASE_URL}/twit/${postId}`,
      fetchAll: `${BASE_URL}/twits/list-twits`,
      fetchComments: (postId: any) => `${BASE_URL}/twits/${postId}/list-comments`,
      delete: `${BASE_URL}/twits/delete-twit`,
    },
    actions: {
      like: (postId: any) => `${BASE_URL}/twits/${postId}/like`,
      comment: (postId: any) => `${BASE_URL}/twits/${postId}/add-comment`,
    },
  },
};

//removed modules.exports for Typescript due to --isolatedModules error
export { endpoints, BASE_URL };
