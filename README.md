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

扫一扫
![pwa.png](https://zzw-19940625-1253788257.cos.ap-guangzhou.myqcloud.com/pwa.png?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID3TLT2c1NeVqqwkGYoc95fT3xRXSdHzAE%26q-sign-time%3D1516704584%3B1516706384%26q-key-time%3D1516704584%3B1516706384%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Dc41eba99a62a0224d6be0a667733e22610fdf294&token=d1619cf1046e7ccc7d296687b152382ac37c902b10001&clientIP=219.133.170.174&clientUA=525057dd-c988-494c-be70-fa46297ea3c5)
