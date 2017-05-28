<template>
	<div id="news">
		<v-swiper :imageList="imageList"></v-swiper>
		<v-list :title="newsTitle" :newsList="newsList"></v-list>
	</div>
</template>
<script>
	import {mapState, mapMutations, mapActions} from 'vuex'
	import API from '../api/API'
	const api = new API();

	import vSwiper from '../components/swiper.vue'
	import vList from '../components/list.vue'
	export default{
		name:"news",
		mounted(){
			// let that = this;
			// api.get('/last-stories')
			// 	.then((res) => {
			// 		if(res.status == 200){
			// 			that.changeData({
			// 				'imageList':res.data.STORIES.top_stories,
			// 				'newsList':res.data.STORIES.stories,
			// 				'newsTitle':"今日新聞"
			// 			})
			// 		}
			// 	}).catch(err=>{
			// 		throw err;
			// 	})
		},
		data(){
			return {

			}
		},
		computed:{
			...mapState([
					'imageList',
        			'newsList',
        			'newsTitle'
				])
		},
		methods:{
			...mapMutations([
					'changeData'
				])
		},
		components:{
			vSwiper,
			vList
		}
	}
</script>
<style lang="sass">
	#news{
		height:100%;
		//margin-top:1rem;
		padding-top:1rem;
		font-size:0.3rem;
		overflow:scroll;
	}
</style>