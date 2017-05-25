<template>
    <div id="app">
      <v-header></v-header>
    </div>
</template>

<script>
import vHeader from './components/header.vue'
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        vHeader
    }
}
</script>

<style>
*{
   padding:0;
   margin:0;
   box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


ul,li{
  list-style-type: none;
}

li {
  display: inline-block;
}

</style>
