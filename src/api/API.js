import axios from 'axios'
import config from './config'
console.log(config);
class API {
    // constructor(){
    //     this.config = config;
    // }
    get(api, param){
        config.params = param || {};
        return axios.get('/themes', config);
    }
    post(data){
        config.data = data || {};
        return axios.post(api,{},config);
    }
}

export default API