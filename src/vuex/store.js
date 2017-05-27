import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/API'

const api = new API();

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowSlider:false,
        imageList:[],
        newsList:[]
    },
    getters:{

    },

    mutations:{
        showSlider(state){
            state.isShowSlider = true;
        },
        hideSlider(state){
            state.isShowSlider = false;
        },
        changeData(state, imageList, newsList){
            console.log(newsList)
            state.imageList = imageList;
            state.newsList = newsList;
        }
    },
    actions:{
        getNews({commit}, item){
            console.log(item)
            api.get(`/themes/${item.id}`)
                .then((res) => {
                    if(res.status==200){
                        commit('changeData', [item], res.data.THEMEDES.stories.shift())
                    }
                })
                .catch((err)=>{
                    throw err;
                })
        }
    }
})