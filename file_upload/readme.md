## 概述
文件上传组件demo。php写的后端服务。

## 配置

### php（mac nginx）

1.启动 php-fpm

2.将 nginx 的 php server 配置成本项目的根目录即可。

```
server {
    listen       80;
    server_name  localhost;
    # 配置成你本地存放此项目的根目录
    root ***/file_upload; 
    index index.php;

    location / {
        index index.php;
        autoindex on; 
    }
    location ~ \.php$ {
        include /usr/local/etc/nginx/fastcgi.conf;
        fastcgi_intercept_errors on; 
        fastcgi_pass   127.0.0.1:9000; 
    }   

}
```

需要注意:

1. 目录的权限，不然上传的文件无法写入目录。
2. nginx.conf http节点下的client_max_body_size，设置为合理的大小，否则大文件无法上传。

### 项目启动

```
npm install 

npm start;
```

## 知识点

### 兼容性

早期的文件上传都是用form元素的submit实现的，现代大家基本使用formdata——它可以更细粒度地控制。

所以作为一个上传组件，这两种都要支持，根据环境切换实现方式。

### form submit
使用form上传代码较简单，主要在form中放一个 tupe=file 的input元素，input元素获取文件后，提交表单即可上传。唯一需要注意的是，需要设置[orm.target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)值以阻止上传结果的信息刷新本页面（form.target的default value 是 _self,表示显示response在本页）。

### ajax formadta

使用 ajax,formdata 上传时，可以使用拖拽文件上传这种较好的交互方式。需要用到以下知识点：

**如何让一个元素响应拖拽事件**

主要注册 ondrop 事件, event.dataTransfer.files中携带了拖拽的文件信息，和input[type='file'] change事件的e.target.files对象一样。
```javascript
targetElement.addEventListener('drop', function(e)=>{
    // e.dataTransfer.files是一个fileList对象
})

```

为了更好的交互，也要对响应拖拽的区域实现dragover和dragleave事件，绑定一些样式变化。

**获取上传进度**

[xhr.upload](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload)是一个对象，主要负责描述上传相关的信息。此对象上的onprogress事件揭示上传进度信息。

```javascript
xhr.upload.onprogress = (e) => {
    // 下载进度
    var ratio = e.loaded / e.total * 100 + "%";
}
```

### 预览

通常需要显示上传进度，上传完的文件预览（图标）。比如图片可以上传完可以直接显示缩略图，其他文件显示其类别图标（比如pdf和excel的图标）。

本demo还未做这些。

