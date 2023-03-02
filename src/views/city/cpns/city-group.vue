<template>

    <div class="city-group">
        <van-index-bar :index-list="indexList">
             <van-index-anchor index="热门城市" />
            <div class="list">
                <template v-for="(item,index) in groupData?.hotCities" :key="index">
                    <div class="city"  @click="cityClick(item)">{{ item.cityName }}</div>
                </template>
            </div>

  
            <template v-for="(group,index) in groupData?.cities" :key="index">
              <van-index-anchor :index="group.group" />
              <template v-for="(city,indey) in group.cities" :key="indey">
                <van-cell :title="city.cityName" @click="cityClick(item)"></van-cell>
              </template>
            </template>
          </van-index-bar>   </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city.js"

const cityStore=useCityStore()
const router=useRouter()
const props=defineProps({
    groupData:{
        type:Object,
        default:()=>({})
    }
})

const indexList=computed(()=>{
    const list =props.groupData.cities.map(item=>item.group)//数组的map方法
    list.unshift("#")

    return list
})

const cityClick=(city)=>{
    router.back();
    console.log(city)
    cityStore.currentCity=city
}


</script>

<style scoped lang="less">
.city-group{
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        padding-right: 25px;
    }

    .city{
        width: 78px;
        height: 28px;
        border-radius: 14px;
        background-color: #fff4ec;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        margin: 6px 0;
    }

}
</style>