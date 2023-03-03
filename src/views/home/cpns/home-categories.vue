<template>
  <div class="categories">
    <template v-for="(item,index) in categories" :key="index">
      <div class="item">
         <img :src="item.pictureUrl" alt="">
         <div class="text">{{ item.title }}</div>
      </div> 
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home.js"
import { storeToRefs } from "pinia";
const homeStore=useHomeStore();
homeStore.fetchCategories();
const {categories}=storeToRefs(homeStore)
</script>

<style scoped lang="less">
.categories {
  display: flex;
  overflow-x: auto;
  overflow-y:hidden;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }

  top: 0;
 
 bottom:0;
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>