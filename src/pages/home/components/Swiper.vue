<template>
<div class="wrapper">
    <swiper :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        data(){
            return{
                swiperOptions:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'001',
                        imgUrl:"https://imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg"
                    },
                    {
                        id:'002',
                        imgUrl:"https://imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg"
                    }
                ]
            }
        }
    }
</script>

<style lang='stylus' scoped>
.wrapper>>>.swiper-pagination-bullet-active
        background #fff
    .wrapper
    overflow hidden//该元素的内容若超出了给定的宽度和高度属性，那么超出的部分将会被隐藏，不占位
    width: 100%
    height: 0
    padding-bottom: 30%
    background #eee
    .swiper-img
        width 100%
</style>