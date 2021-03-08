<template>
    <div>
        <HomeHeader ></HomeHeader>
        <HomeSwiper :swiperList='swiperList'></HomeSwiper>
        <HomeIcons :iconList='iconList'></HomeIcons>
        <HomeRecommend :recommendList='recommendList'></HomeRecommend>
        <HomeWeekend :weekendList='weekendList'></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
    export default {
        name:'Home',
        data(){
            return{
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res=res.data
                if(res.ret&& res.data){
                    const data=res.data
                    this.swiperList=data.swiperList
                    this.iconList=data.iconList
                    this.recommendList=data.recommendList
                    this.weekendList=data.weekendList
                }
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style>
</style>