// node 创建简单的tcp服务器, 使用net模块

// TCP 是传输层的控制协议, 位于ip层和应用层之间
// TCP 采用三次握手创建连接
// 对于持久连接, 服务器必须要判定何时请求发送完毕
// 所以必须要提供请求的长度,但由于请求长度难以确定
// 传统的Content-Length就不行了
// 所以最新采用 Transfer-Encoding: chunked : 分块编码


require('net').createServer(function(sock){
    sock.on('data', function(data){
        sock.write('HTTP/1.1 200ok\r\n');
        sock.write('Transfer-Encoding: chunked\r\n');  // 确定分块编码
        sock.write('\r\n');
        // 分块编码的格式
        // 16进制的块长度值
        // 数据
        // 最后一个分块的长度为0表征结束
        sock.write('b\r\n');
        sock.write('12345678911\r\n');

        sock.write('6\r\n');
        sock.write('123456\r\n');

        sock.write('0\r\n');
        sock.write('\r\n');
        // sock.destroy();  // 断开持久连接
        // 可见, 采用分块编码,数据域+长度的形式
        // 可以方便的在持久连接中判定请求何时结束
    });
}).listen(8000);

