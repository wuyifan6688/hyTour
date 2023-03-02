<template>
  <div>
    <navBar></navBar>
    
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <searchBox></searchBox>
    
    <div class="hotSuggests">
      <template v-for="(item,index) in hotSuggests" :key="index">
      <div class="item" :style="{color: item.tagText.color,backgroundColor: item.tagText.background.color}">{{ item.tagText.text }}</div></template>
    </div>


  </div>
</template>

<script setup>
import navBar from "./cpns/home-nav-bar.vue"
import searchBox from "./cpns/home-search-box.vue"
import useHomeStore from "../../store/modules/home.js"
import { storeToRefs } from "pinia"



const homeStore=useHomeStore()
homeStore.fetchHotSugggets()
const {hotSuggests}=storeToRefs(homeStore)


</script>

<style lang="less" scoped>
.banner{
    img{
        width: 100%;
    }
}


.hotSuggests{
  display: flex;
 flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 20px;
  .item{
    justify-content: center;
    padding: 4px 10px;//非常关键的属性
    font-size: 14px;
   margin-bottom: 10px;
    background-color: #ffd4b7;
    border-radius: 14px;
 
  }
}

</style>