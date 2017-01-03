> 演示打印功能的demo

## 使用方式

> npm install

> npm start

## 原理

1. 首页上有一个不在viewport内的iframe，shell.html，直接打印这个iframe

2. 请求打印的目标页面，target.html，将它的内容放到shell.html中，打印


## 兼容性

```javascript
shell.contentDocument.body.innerHTML = rs;
shell.contentWindow.print();
```
以上代码中 contentDocument，contentWindow需要调查兼容性。

