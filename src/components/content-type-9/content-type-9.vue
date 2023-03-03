<template>
    <div class="v3">
      <img :src="itemData.image.url" alt="">
      
      <div class="text">
        <div class="judge">
           <div class="summury">{{ itemData.summaryText }}</div>
           
      </div>
      <div class="details">
          {{ itemData.houseName }}
      </div>
      
     
      <div class="price">
        <van-rate :v-model="itemScore" size="12px"  readonly allow-half color="white"/>
           <div class="priceNow">￥{{    itemData.finalPrice }}</div>
      </div>

      </div>
     
     
    </div>
  </template>
  
  <script setup>
import { computed } from "vue"

  
  const props=
  defineProps({
      itemData:{
          type:Object,
      }
  })


  const itemScore=computed(()=>Number(props.itemData.commentScore))

  </script>
  
  <style lang="less" scoped>
  .v3{
    position: relative;
    overflow: hidden;
    color: rgb(255, 255, 255);
      width: 47%;
      padding: 0 4px;
  
      .place{
          display: flex;
          font-size: 12px;
          height: 30px;
          align-items: center;
          img{
              width: 18px;
          }
      }
  .judge{
    font-size: 12px;
  }
      .details{
        display: -webkit-box;
        -webkit-line-clamp: 2;   
         -webkit-box-orient: vertical;
        //这三行：组合拳

        text-overflow: ellipsis; 
            
           
        overflow: hidden;  //溢出内容隐藏
          width: 90%;
          margin-top: 3px;
          overflow: hidden;
      }
  
      img{
      width: 90%;
      padding: 5px;
      border-radius: 20px;
  }
  
  .text{
   
    bottom: 10px;
    position: absolute;
    padding: 0 10px;
  }
  

  
      .price{
          line-height: 25px;
          align-items: center;
          display: flex;
          font-size: 14px;
  
         .priceNow{
          color: white;
          margin-right: 2px;
          font-size: 16px;
         }
         .priceBefore{
          position: relative;
          bottom: 1px;
          color: gray;
          text-decoration:line-through;
          font-size: 12px;
          margin-right:6px;
          
         }
  
         .come{
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          color: #fff;
          line-height: 18px;
          border-radius: 14px;
          position: relative;
          bottom: 1px;
          font-size: 12px;
          padding: 0 10px;
         }
      }
  }
  
  </style>