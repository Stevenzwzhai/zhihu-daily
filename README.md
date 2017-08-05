# zhihu-daily

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
pwa文件夹中是写好的一个pwa应用可以直接拿来用，其中配置文件（sw.js）是可以重复利用的，只需要更改缓存文件列表（cacheList）即可，manifest.json也可以作为参考。

api:<https://segmentfault.com/a/1190000009242864>

这里没有使用路由，所以点击进入详情之后只能点击顶部的返回按钮返回

调试过程中，知乎的图片防盗可以在图片url前加http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=
由于pwa要在https下访问，所以内置http请求会有问题，这里采用另一种方式imgUrl.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=');原理跟上述一致，不过是https。

##### 首页图片放到链接已经解决。

use vue to complete a pwa

演示地址：<https://stevenzwzhai.github.io/zhihu-daily/>
