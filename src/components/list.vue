<template>
    <div id="list">
        <h5 class="title">{{title}}</h5>
        <ul>
            <li v-for="item in newsList">
                {{item.title}}
                <img :src="item.images?item.images[0]:defaultImage" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'list',
        data(){
            return {
                defaultImage:"http://p1.zhimg.com/80/0b/800b79a4821a535de31b349ffdc9eabb.jpg"
            }
        },
        props:['title', 'newsList']
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