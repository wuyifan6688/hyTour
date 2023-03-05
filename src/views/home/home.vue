<template>
  <div class="home">
    <navBar></navBar>
    
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <searchBox></searchBox>
    
    <categories></categories>
   


    <searchBar v-show="isShowSearchBar"></searchBar>

    <loading></loading>
    <content ></content>
  
  </div>
</template>

<script setup>  
import navBar from "./cpns/home-nav-bar.vue"
import searchBox from "./cpns/home-search-box.vue"
import categories from "./cpns/home-categories.vue"
import content from "./cpns/home-content.vue"
import useHomeStore  from "@/store/modules/home.js"
import useScroll from "../../hooks/useScroll"
import { computed, watch } from "vue"
import useMainStore from "../../store/modules/main"
import searchBar from "@/components/search-bar/search-bar.vue"
import loading from "@/components/loading/loading.vue"


const mianStore=useMainStore()

const homeStore= useHomeStore();
const {isReachBottom,scrollTop}=useScroll()
watch(isReachBottom,(newValue)=>{
  if(newValue){
    homeStore.fetchContent().then(()=>isReachBottom.value=false)//记得加value
    
  }
})

const isShowSearchBar=computed(()=>{
return  scrollTop.value>=420
})



</script>

<style lang="less" scoped>
.banner{
    img{
        width: 100%;
    }
}

.home{
  padding-bottom: 50px;
}



</style>