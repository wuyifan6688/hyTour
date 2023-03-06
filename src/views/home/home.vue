<template>
  <div class="home" ref="homeRef">
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
import { computed, onActivated, watch ,ref} from "vue"
import useMainStore from "../../store/modules/main"
import searchBar from "@/components/search-bar/search-bar.vue"
import loading from "@/components/loading/loading.vue"





const mianStore=useMainStore()

const homeRef=ref()




const homeStore= useHomeStore();
const {isReachBottom,scrollTop}=useScroll(homeRef)
watch(isReachBottom,(newValue)=>{
  if(newValue){
    homeStore.fetchContent().then(()=>isReachBottom.value=false)//记得加value
    
  }
})

const isShowSearchBar=computed(()=>{
return  scrollTop.value>=420
})




onActivated(()=>{
  
  homeRef.value?.scrollTo({
    top:scrollTop.value
  })
})

</script>

<style lang="less" scoped>

.home{
  height: 100vh;
  overflow-y: auto;//这个很关键
  padding-bottom: 200px;
  box-sizing: border-box;
  
  .banner{
    img{
        width: 100%;
    }
}

.home{
  padding-bottom: 50px;
}


}


</style>