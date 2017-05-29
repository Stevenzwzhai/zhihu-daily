<template>
    <div id="app">
        <v-header></v-header>
        <v-slider :key="sliderKey"></v-slider>
        <keep-alive>
            <component :is="currentView">
              <!-- 非活动组件将被缓存！ -->
            </component>
        </keep-alive>
    </div>
</template>
<script>
import vHeader from './components/header.vue'
import vSlider from './components/slider.vue'
import vNews from './daily/news.vue'
import vDetail from './daily/detail.vue'
import {mapState} from 'vuex'
export default {
    name: 'app',
    data () {
        return {
        }
    },
    computed:{
        ...mapState(['sliderKey', 'currentView'])
    },
    components:{
        vHeader,
        vSlider,
        vNews,
        vDetail
    }
}
</script>

<style>
*{
   padding:0;
   margin:0;
   box-sizing: border-box;
}
html, body, #app{
    height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position:relative;
}


ul,li{
  list-style-type: none;
}

li {

}
span{
  display:inline-block;
  vertical-align: top;
}
.flex{
    display:flex;
    display: -webkit-flex; /* Safari */
    flex-direction:row;
    flex-wrap: nowrap;
    justify-content:space-between;
}

</style>
