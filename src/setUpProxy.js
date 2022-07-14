const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://voyage-chocolatine-01040.herokuapp.com",
      changeOrigin: true,
    })
  );
};
