<template>
    <div id="app">
        <v-header></v-header>
        <v-slider></v-slider>
        <v-news></v-news>
    </div>
</template>

<script>
import vHeader from './components/header.vue'
import vSlider from './components/slider.vue'
import vNews from './daily/news.vue'
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        vHeader,
        vSlider,
        vNews
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
