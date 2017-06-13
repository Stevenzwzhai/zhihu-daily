<template>
    <div id="list">
        <h5 class="title">{{title}}</h5>
        <ul @click="getDetail($event)">
            <li v-for="(item, index) in newsLists" :index="index">
                {{item.title}}
                <img :src="item.images?item.images[0]:defaultImage" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default{
        name:'list',
        data(){
            return {
                defaultImage:"https://p1.zhimg.com/80/0b/800b79a4821a535de31b349ffdc9eabb.jpg"
            }
        },
        props:['title', 'newsList'],
        computed:{
            newsLists(){
                return this.newsList.map(item=>{
                            item.images = [item.images[0].replace(/http\w{0,1}:\/\//, 'https://images.weserv.nl/?url=')]
                            return item;

                        })
            }
        },
        methods:{
            ...mapActions(['getNewsDetail']),
            getDetail(event){
                let item = this.newsList[+event.target.getAttribute('index')];
                this.getNewsDetail(item.id)
            }
        }
    }
</script>
<style scoped lang="sass">
    #list{
        .title{
            padding-left:0.2rem;
            color:#6B6B6B;
        }

        margin-top:0.2rem;
        ul{
            margin-top:0.5rem;
        }


        li{
            height:1.5rem;
            padding:0.2rem 2rem 0.2rem 0.2rem;
            background-color:#fff;
            margin:0.2rem;
            position:relative;

            img{
                width:1.2rem;
                height:1.2rem;
                position:absolute;
                right:0.3rem;
                top:0.2rem;
            }
        }
    }
</style>