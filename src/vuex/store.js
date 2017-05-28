import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/API'

const api = new API();

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowSlider:false,
        imageList:[],
        newsList:[],
        newsTitle:""
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
        changeData(state, obj){
            state.imageList = obj.imageList || [];
            state.newsList = obj.newsList || [];
            state.newsTitle = obj.newsTitle || "";
        }
    },
    actions:{
        getNews({commit}, item){
            if(item.id=='0000'){
                api.get('/last-stories')
                    .then((res) => {
                        if(res.status == 200){
                            commit('changeData',{
                                'imageList':res.data.STORIES.top_stories,
                                'newsList':res.data.STORIES.stories,
                                'newsTitle':"今日新聞"
                            })
                        }
                    }).catch(err=>{
                        throw err;
                    })
                    return;
            }
            api.get(`/themes/${item.id}`)
                .then((res) => {
                    if(res.status==200){
                        let imageList = {
                            image:res.data.THEMEDES.background,
                            title:res.data.THEMEDES.description,
                            id:item.id
                        }
                        commit('changeData', {
                            'imageList':[imageList], 
                            'newsList':res.data.THEMEDES.stories,
                            'newsTitle':res.data.THEMEDES.name
                        })
                    }
                })
                .catch((err)=>{
                    throw err;
                })
        }
    }
})