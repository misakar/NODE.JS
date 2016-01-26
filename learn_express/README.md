learn express (web framework for nodejs)
===

- [**express官网**(http://expressjs.com)
- **安装express框架**
    - <code>npm init</code>[关于npm init](https://github.com/neo1218/NODE.JS/tree/master/learn_npm)
    - <code>npm istall express --save</code>
- [**使用express框架搭建web应用**]
    - [***Hello World程序***](https://github.com/neo1218/NODE.JS/blob/master/learn_express/helloexpress.js)
    - [***Express application generator***](http://expressjs.com/en/starter/generator.html)
        - 作用: 快速构建express应用骨架
        - 安装: npm install express-generator -g
        - 帮助: express -h
        - [代码示例]()
    - [***路由***](http://expressjs.com/en/starter/basic-routing.html)
        - app: express app
        - METHOD: http 方法
            - 常见的http方法: GET PUT POST DELETE HEAD OPTION
            - 特殊的方法: all
                - 作用: 用于中间件, 用于不同handler间的过渡
                - [代码示例]()
        - PATH: 服务器资源路径
            - [path-to-regexp](https://www.npmjs.com/package/path-to-regexp)
        - HANDLER: 路由被匹配时执行的回调函数
        - [代码示例]()

