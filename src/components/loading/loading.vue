<template>
  <div class="loading" v-if="isLoading">
    <div class="in">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
        
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useMainStore from '../../store/modules/main';
const mainStore=useMainStore();
const {isLoading} =storeToRefs(mainStore)
</script>

<style lang="less" scoped>
.loading{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
    // width: 100%;
    // height: 30%;这样无法脱离原来的窗口，只会向下延展
    z-index: 999;
   background-color: rgba(0,0,0,.2);

   .in{
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@/assets/img/home/loading-bg.png) ;
    background-size: contain;
     img{
        
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
        
    }
   }
   
}
</style>