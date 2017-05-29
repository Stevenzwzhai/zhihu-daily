<template>
	<div id="detail">
		<div class="header">
			<div class="img-container">
                <img :src="newsDetail.image" alt="">
                <div class="title">{{newsDetail.title}}</div>
            </div>
		</div>
		<link rel="stylesheet" :href="newsDetail.css[0]">
		<newsContent :newsDetail="newsDetail"></newsContent>
		
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		name:"detail",
		data(){
			return {

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
		//margin-top:1rem;
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