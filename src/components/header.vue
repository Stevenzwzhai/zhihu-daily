<template>
    <div id="header" class="flex">
        <div class="left">
            <span class="category" @click="showSlider()"></span>
            <span class="title" v-text="title" @click="changeSliderKey()"></span>
        </div>
        <div class="right">
            <span class="notify"></span>
            <span class="setting"></span>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:"header",
    data () {
        return {
            title:"首页"
        }
    },
    methods:mapMutations([
            'showSlider',
            'changeSliderKey'
        ])
}
</script>
<style lang="sass">
    #header{
        font-size:0.35rem;
        color:#fff;
        background-color:#359DDA;
        height:1rem;
        line-height: 1rem;
        position:absolute;
        top:0;
        width:100%;
        z-index:100;
        
        span{
            height: 1rem;
            vertical-align:top;
            width: 0.5rem;
            margin-left:0.2rem;
            background-size: 0.5rem;
            background-position: center;
            background-repeat: no-repeat;  
        }
        .category{
            background-image: url(../assets/svg/Category.svg);
        }
        .title{
            width:2rem;
        }
        .notify{
            background-image: url(../assets/svg/notify.svg);
        }
        .setting{
            background-image: url(../assets/svg/more-y.svg);
        }
    }
</style>


