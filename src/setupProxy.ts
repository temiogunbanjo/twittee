const { createProxyMiddleware } = require('http-proxy-middleware');
let BASE_API_HOST = process.env.REACT_APP_API_BASE_HOST;
// console.log(BASE_API_HOST);

exports = function (app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: BASE_API_HOST,
      changeOrigin: true,
    })
  );
};
