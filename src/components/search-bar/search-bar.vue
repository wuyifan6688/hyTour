<template>

<div class="true">
  <div class="searchBar">

   
        
   
   <div class="left">
    <span>住</span><br>
    <span>离</span>
   </div>


   <div class="date">
  <div>{{ startStr }}</div>
   <div>{{ endDateStr }}</div>
</div>

<div class="search">
    <span>关键字/位置/民宿</span>
</div>


 </div>
  </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import {formatMonthDay}from "@/utils/format_date.js"
import useMainStore from '../../store/modules/main';

const mainStore=useMainStore();
const {startDate,endDate}=storeToRefs(mainStore)
const startStr=computed(()=>formatMonthDay(startDate.value,"MM.DD"))
const endDateStr=computed(()=>formatMonthDay(endDate.value,"MM.DD"))

</script>

<style lang="less" scoped>
.true{
    font-size: 14px;
    align-items: center;
 
    position: fixed;
    z-index: 9;
    background-color: white;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 10px;
    padding-bottom: 1px;


    .searchBar{
        width: 93%;
        height: 100%;
        background-color: rgb(241, 243, 244);
        display: flex;
        align-items: center;
        border-radius: 14px;

  .left{
        color: grey;
        margin-left: 3px;
        margin-right: 3px;
    }
    .date{
        display: flex;
        width: 40px;                                                            ;
        flex-wrap: wrap;

        margin-right: 3px;
    }


    .search{
        color: grey;
    }


    }

  
}
</style>