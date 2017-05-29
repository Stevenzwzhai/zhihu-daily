<template>
    <div id="header" class="flex">
        <div class="left">
            <span v-show="currentView=='vNews'" class="category" @click="showSlider()"></span>
            <span v-show="currentView=='vDetail'" class="back" @click="back()"></span>
            <span class="title" v-text="title" @click="changeSliderKey()"></span>
        </div>
        <div class="right">
            <span class="notify"></span>
            <span class="setting"></span>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name:"header",
    data () {
        return {
            title:"首页"
        }
    },
    computed:{
        ...mapState(['currentView'])
    },
    methods:mapMutations([
            'showSlider',
            'changeSliderKey',
            'back'
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
        .back{
            background-image: url(../assets/svg/arrow.svg);
            transform:rotate(90deg);
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


