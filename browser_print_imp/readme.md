> 演示打印功能的demo

## 使用方式

> npm install

> npm start

## 原理

请求打印的目标页面，target.html，将它的内容放到一个新创建的iframe元素中，打印


## 风险

1. 兼容性

```javascript
shell.contentDocument.body.innerHTML = rs;
shell.contentWindow.print();
```
以上代码中 contentDocument，contentWindow需要调查兼容性。


2. 多个html,body元素合并的默认行为

一个html中只能存在一个html、一个body元素。

当在A的body中插入一个新的html B时，浏览器会取出B html中除了html、body元素之外的所有元素放在A的body中。——这个默认行为chrome42和ie10下得到证实，其他版本未知。

