<template>
  <div class="content">
    <div class="hot">热门精选</div>
    <div class="data">列表数据</div>


    <div class="show">
        <template v-for="(item,index) in content" :key="index">
            <contentV3 v-if="item.discoveryContentType==3" :itemData="item.data"></contentV3>
            <contentV9 v-else :itemData="item.data"></contentV9>
        </template>
    </div>



</div>
</template>

<script setup>
import useHomeStore  from "@/store/modules/home.js"
import {storeToRefs} from "pinia"
import contentV3 from "@/components/content-type-3/content-type-3.vue"
import contentV9 from "@/components/content-type-9/content-type-9.vue"



const homeStore=useHomeStore();
homeStore.fetchContent();
 let {content}=storeToRefs(homeStore)


const clickData=()=>{
  homeStore.fetchContent();
  //let {content}=storeToRefs(homeStore)不能放在内部
  console.log(content)
}
</script>

<style lang="less" scoped>
.hot{
    font-size: 30px;
    font-weight: bold;
}
.show{
    display: flex;
    flex-wrap: wrap;
}
</style>