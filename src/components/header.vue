<template>
    <div id="header">
        <span class="category"></span>
        <span class="title">首页</span>
        <span class="info"></span>
        <span class="setting"></span>
    </div>
</template>
<script>
export default {
    name:"header",
    data () {
        return {

        }
    }
}
</script>
<style lang="sass">
    #header{
        font-size:0.35rem;
        color:#fff;
        background-color:#359DDA;
        height:1rem;
        line-height: 1rem;
        span{
            display:inline-block;
            height: 1rem;
            vertical-align:top;
            margin-left:0.2rem;
        }
        .category{
            width: 0.5rem;
            background-image: url(/dist/Category.svg?dd3704d684234049ffc8303eefcd3e1d);
            background-size: 0.5rem;
            background-position: center;
            background-repeat: no-repeat;
            
        }
    }
</style>


