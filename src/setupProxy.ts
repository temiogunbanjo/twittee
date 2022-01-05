const { createProxyMiddleware } = require('http-proxy-middleware');

let BASE_API_HOST = process.env.REACT_APP_API_BASE_HOST;

module.exports = function (app: any) {
  app.use(
    '/',
    function (req: any, res: any, next: any) {
      console.log(req.origin);
      console.log(res);
      next();
    },
    createProxyMiddleware({
      target: BASE_API_HOST,
      changeOrigin: true,
    })
  );
};
