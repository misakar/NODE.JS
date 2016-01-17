learn npm (npm is not acronym)
===

- [npm 是js世界的包管理器](https://www.npmjs.com/)
- 什么是包管理
    - 包管理是系统安装和维护软件的一种方法
    - 一般可以良好的处理软件包依赖
    - 打包分享每个人的软件

- 使用npm安装nodejs包
    - npm init 生成 package.json文件
        - package.json
            - 定义node package信息
        - 各项解释
            - name: package的名字
            - version: package的版本
            - description: package的描述
            - entry point: 入口文件, 当其他模块require这个模块时就会被调用
            - test command: 测试命令
            - git repository: 对应的git仓库
            - keywords: 关键字
            - author: 作者
            - license: 发布协议
        - 依赖
            - 使用<code>npm install</code>下载的包信息就会显示在package.json的dependencies中

    - npm install (--save)
        - node_modules
            - 包含node modules, modules即可以在node中被require的程序

- 使用npm分享你的nodejs包(publish)
    - [参见:使用npm发布你的nodejs包](http://heeroluo.net/article/detail/103/how-to-publish-npm-package)

