<template>
    <div id="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imageLists" :key="item.id">
                <div class="img-container">
                    <img :src="item.image" alt="">
                    <div class="title">{{item.title}}</div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import Vue from 'vue'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{
        name:"swiper",
        data(){
            return {

            }
        },
        props:['imageList'],
        computed:{
            imageLists(){
                return this.imageList.map((item) => {
                    // item.image = item.image.replace(/https/g, 'http');
                    console.log(item.image);
                    return item;
                })
            }
        }
    }
</script>
<style scoped lang="sass">
    #swiper {
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
</style>