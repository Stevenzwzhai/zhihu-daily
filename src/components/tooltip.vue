<template>
	<div id="tooltip" :class="{show:isShow}">
		{{content}}
	</div>
</template>
<script>
	export default{
		name:"tooltip",
		data(){
			return {

			}
		},
		props:['isShow', 'content'],
		watch:{
			isShow(newVal, oldVal){
				if(newVal){
					let timer = setTimeout(() => {
						this.$emit('update:isShow', false)
						clearTimeout(timer);
					}, 1500)
				}
			}
		}
	}
</script>
<style>
	#tooltip{
		width:3rem;
		position:fixed;
		bottom:3rem;
		left:50%;
		margin-left:-1.5rem;
		background-color:rgba(0, 0, 0, 0.5);
		color:#fff;
		display:none;
		opacity:0;
		z-index:9999;
		min-height: 0.6rem;
    	border-radius: 0.1rem;
    	text-align: center;
    	line-height: 0.6rem;
    	font-size:0.3rem;
    	transition:all 0.4 ease-out 0;
		-webkit-transition:all 0.4 ease-out 0;
	}
	.show{
		display:block !important;
		opacity:1 !important;
	}
</style>