const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api/Customer",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'http://aspnetbackend:5005',
        secure: false
    });

    app.use(appProxy);
};
