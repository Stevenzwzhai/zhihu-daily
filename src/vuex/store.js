import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowSlider:false
    },

    mutations:{
        showSlider(state){
            state.isShowSlider = true;
        },
        hideSlider(state){
            state.isShowSlider = false;
        }
    }
})