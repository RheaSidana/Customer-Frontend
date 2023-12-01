const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://qa2.sunbasedata.com/sunbase/portal",
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request to:', proxyReq._headers.host + proxyReq.path);
      }
    })
  );
};
