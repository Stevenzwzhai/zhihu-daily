<template>
	<div id="detail">
		<div class="header">
			<div class="img-container">
                <img :src="newsDetail.image" alt="">
                <div class="title">{{newsDetail.title}}</div>
            </div>
		</div>
		<link rel="stylesheet" :href="newsDetail.css[0].replace(/http/g,'https')">
		<newsContent v-show="cssLoaded" :newsDetail="newsDetail"></newsContent>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import axios from 'axios'
	export default{
		name:"detail",
		mounted(){
			//由于内容的css需要额外请求,这里做了一个简单粗暴的处理， 防止css未加载的时候渲染出的页面格式有问题
			let that = this;
			//css的地址需要跨域所以采用fetch请求，我们只需要请求返回结果即可，而不用返回具体值
			fetch(this.newsDetail.css[0].replace(/http/g,'https'), {mode:'no-cors'})
				.then(res => {
					that.cssLoaded = true;
				})
		},
		data(){
			return {
				cssLoaded:false
			}
		},
		computed:{
			...mapState(['newsDetail'])
		},
		components:{
			'newsContent':{
				data(){
					return {

					}
				},
				props:['newsDetail'],
				template:'<div v-html="newsDetail.body"></div>'
			}
		}
	}
</script>
<style lang="sass">
	#detail{
		height:100%;
		padding-top:1rem;
		font-size:0.3rem;
		overflow:scroll;
		.header{

	        height:3rem;
	        background-color:#fff;

	        .img-container{
	            position:relative;
	            height:3rem;
	            text-align:center;
	            img{
	                height:3rem;
	                width:100%;
	            }
	            .title{
	                position:absolute;
	                width:80%;
	                bottom:0.4rem;
	                left:10%;
	            }
	        }
		}
	}
</style>