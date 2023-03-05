<template>
  <div class="info">
    <div class="title">{{ infoData.houseName }}</div>
    <div class="tags">
        <template v-for="(item,index) in infoData.houseTags" :key="index">
          <span v-if="item.tagText"  :style="{color:item.tagText.color,background:item.tagText.background.color}">
            {{ item.tagText.text }}
        </span>  
        </template>    
    </div>


    <div class="rate">
        <span class="score">{{ infoData.commentBrief.overall }}</span>
        <span class="judge">{{ infoData.commentBrief.scoreTitle }}</span>
        <span class="judgeMore">{{ infoData.commentBrief.commentBrief }}</span>
        <span class="judgeMore2">{{ infoData.commentBrief.commentBriefV2 }}</span>
        <span class="more">{{ infoData.commentBrief.totalCount }}条评论<van-icon name="arrow" /></span>
    </div>

    <div class="place">
        <span class="left">{{infoData.nearByPosition.address}}</span>
        <span class="right">地图·周边<van-icon name="arrow" /></span>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue"
const props=defineProps({
    infoData:{
        type:Object,
        default:()=>({})
    }
})
</script>

<style lang="less" scoped>
.info{
    padding-bottom: 20px;
    padding-left: 4px;
    margin-top: 20px;
    .title{
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 22px;
    }

    .tags{
        margin-bottom: 4px;
        font-size: 12px;
        padding: 3px 3px;
        display: flex;
        span{
            margin-right: 3px;
            padding: 3px 3px;

        }
    }


    .rate{
        border-radius: 6px;
        vertical-align:bottom;
        height: 50px;
        background-color: #f4f6f9;
        display: flex;
        align-items: center;
        margin: 0 3px;
        padding: 0 4px;
       

        .score{
            font-size: 22px;
            font-weight: bold;
            margin-right: 2px;
        }
        .judge{
            font-size: 14px;
            font-weight: bold;
        }
        .judgeMore{
            font-size: 12px;
            color: #888089;
            margin-left: 2px;
        }
        .more{
            right: 15px;
            color:#fbb988;
            font-size: 14px;
            position: absolute;//相对定位：相对于父亲而言   这样right才能生效
        }
    }

    .place{
        vertical-align:bottom;
        height: 50px;
        background-color: #f4f6f9;
        display: flex;
        border-radius: 12px;
        align-items: center;
        margin: 0 3px;
        padding: 0 4px;
        //padding: 0 8px;bgc在padding里面
        margin-top: 10px;

        .left{
            font-size: 14px;
            font-weight: bold;
            margin-right: 2px;
        }
        .right{
            right: 15px;
            color:#f6a770;
            font-size: 14px;
            position: absolute;
        }
    }
}
</style>