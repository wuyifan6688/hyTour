<template>
  <div class="swipe">

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
       <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item class="item"><img :src="item.url" alt=""></van-swipe-item>
       </template> 


       <template #indicator="props">
    <div class="custom-indicator">
       <template v-for="(value,key,index) in swipeGroup" :key="key">
         <span  :class="{active: swipeData[props.active]?.enumPictureCategory== key }">
            <span>{{getName( value[0].title )}}</span>
            <span v-if="swipeData[props.active]?.enumPictureCategory== key">{{ getIndex(swipeData[props.active])+1}} / {{value.length  }}</span>
        </span>
       </template>
    </div>
  </template>

    </van-swipe>

  </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props=defineProps({
    swipeData:{
        type:Array,
        default:()=>[]
    }
})

const getName=(name)=>{
    return name.replace("：","").replace("【","").replace("】","")
}

const getIndex=(item)=>{
    const array=swipeGroup[item.enumPictureCategory]
    return array.findIndex(data=>data==item)
}

let swipeGroup={}
for(const item of props.swipeData){
    let valueArray=swipeGroup[item.enumPictureCategory];
    if(!valueArray)
    {
        valueArray=[];
        swipeGroup[item.enumPictureCategory]=valueArray
    }
    valueArray.push(item)
  
} 
</script>

<style lang="less" scoped>
.swipe{
    .item{
          img{
        width: 100%;
    }
    }


    .custom-indicator {
        color: white;
        background-color: black;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    

    span{
        margin-right: 3px;



        &.active{//????
            border-radius: 12px;
            padding: 2px  4px;
            background-color: white;
            color: black;
        }
    }
  }
  
}
</style>