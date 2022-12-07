const http = require('http');
const httpProxy = require('http-proxy');
// 创建一个代理服务器
const proxy = httpProxy.createProxyServer();
// 创建http服务器并监听8888端口
let server = http.createServer(function (req, res) {
    // 将用户的请求转发到本地9999端口
    proxy.web(req, res, {
        target: 'http://127.0.0.1:9999'
    });
    // 监听代理服务器错误
    proxy.on('error', function (err) {
        console.log(err);
    });
});
server.listen(8888, '0.0.0.0');
