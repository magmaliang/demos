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

需要注意目录的权限，不然上传的文件无法写入目录。

### 项目启动

```
npm install 

npm start;
```

## 设计

### 兼容性

要想写好一个上传组件不是一件容易的事。FormData上传较简单，使用form上传后默认行为是跳页。

习惯上在form内部隐藏一个iframe，将form的target设置成此iframe,则form上传完成后会将内容输入此iframe——以此阻止跳页。

### 上传进度
