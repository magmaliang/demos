这是学习gulp时写的一个应用，可以按照/common/bs.js下的配置生成多个项目的环境。主要使用了 webpack-code-splitting。

## 使用方式

需要注意 getRemoteConfig 这个 task 以 http 的方式获取数据，使用时可以使用nginx代理 bs.json，或者直接修改代码获取数据。

```shell
npm install

gulp buildsv
```
生成的结果在release里面，每个html文件都是入口。