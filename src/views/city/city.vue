<template>
  <div class="city  top-page " >

    



    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" show-action @cancel="onCancel"/>
          
          <van-tabs  v-model:active="tabActive" color="#ff9854" line-width="22px">
            <template v-for="(value,key) in allCities" >
              <van-tab :title="value.title" :name="key"></van-tab>
            </template>
          </van-tabs>
    </div>
   
    
           
          <div class="content">
            <template v-for="(value,key,index) in allCities">
             <cityGroup  v-show="tabActive==key" :groupData="value"></cityGroup>
            </template>
       
          </div>


       
     

 

  </div>
</template>

<script setup>
import cityGroup from "./cpns/city-group.vue"
import {computed, ref} from "vue"
import { useRouter } from 'vue-router';
import {storeToRefs} from "pinia"
import useCityStore from "@/store/modules/city.js"
//没有defualt导出，就必须用{}
const router =useRouter()
const searchValue=ref()
let tabActive=ref()
const onCancel=()=>{
    router.back()
}

// const allCity=ref({})
// getCityAll().then(res=>{
//   allCity.value=res.data
//   console.log(res.data)
// })
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
const currentGroup=computed(()=>allCities.value[tabActive.value])

</script>

<style scoped lang="less">
.top{
  position: relative;//???
  z-index: 9;
}

.city{

  /*--van-tab-font-size:22px  */
  .content{
    height:  calc(100vh - 98px) ;//运算符前后需要保留空格
    overflow-y: auto;
  }

  // .top{
  //   position: fixed;
  //   top: 0px;
  //   left: 0px;
  //   right: 0px;
  // }
}
</style>