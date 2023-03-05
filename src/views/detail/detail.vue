<template>
  <div>
    <div class="nav">
          <van-tabs v-model:active="active" @click-tab="onClickTab" v-if="show">
  <van-tab title="描述"></van-tab>
  <van-tab title="设施"></van-tab>
  <van-tab title="房东"></van-tab>
  <van-tab title="评论"></van-tab>
  <van-tab title="评论"></van-tab>
  <van-tab title="周边"></van-tab>
</van-tabs>
    </div>
  

   


    <van-nav-bar
  title="房屋详情"
  left-text="旅途"
  left-arrow
  @click-left="onClickLeft"
  style="--van-nav-bar-text-color:   var(--primary-color);
  --van-nav-bar-icon-color:var(--primary-color) "
/>


<!-- 这个部分有点问题，如果没有vif的话，也就是没有计算属性的话，就不会刷新 -->
<div v-if="mainPart">
<swipe name="描述" :ref="getSctionRef"  :swipeData="mainPart?.topModule.housePicture.housePics"></swipe>
<info name="设施" :ref="getSctionRef" :infoData="mainPart?.topModule"></info>
<facility name="房东" :ref="getSctionRef" :facilityData="mainPart?.dynamicModule.facilityModule"></facility>
<landLord name="评论" :ref="getSctionRef" :landLordData="mainPart?.dynamicModule.landlordModule"> </landLord>
<comment name="须知" :ref="getSctionRef" :commentData="mainPart?.dynamicModule.commentModule"></comment>
<more name="周边"  :ref="getSctionRef" ></more>
<!-- 之前：landLordData单词搞错了 -->
</div>




  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { computed, ref,watch } from 'vue';
import swipe from "./cpns/detail-01-swipe.vue"
import {getDetail} from "@/service/modules/detail.js"
import info from "./cpns/detail-02-info.vue"
import facility from "./cpns/detail-03-facility.vue"
import landLord from "./cpns/detail-04-landlord.vue"
import comment from "./cpns/detail-05-comment.vue"
import more from "./cpns/detail-06-more.vue"
import useScroll from '../../hooks/useScroll';




let active=ref()
let show=ref(false)
const {scrollTop}=useScroll()
watch(scrollTop,(newValue)=>{
    if(newValue>=500)show.value=true;
    else show.value=false
})
///////////////////////////////////
const sectionEls=ref({});
const getSctionRef=(value)=>{
    const name=value.$el.getAttribute("name")
    
    console.log(value.$el.offsetHeight)
}


const onClickTab=(value)=>{
    console.log(value.title)

    
}
/////////






watch(scrollTop,(newValue)=>{
 console.log(newValue)
})

const route=useRoute();
const router=useRouter()

const onClickLeft=()=>{
    router.back();
}

const houseId=route.params.id

const detailInfos=ref({})
const mainPart=computed(()=>detailInfos.value.mainPart)
getDetail(houseId).then(res=>{
        detailInfos.value=res.data
})
</script>

<style lang="less" scoped>
.nav{
    position: fixed;
    z-index: 99;
    width: 100%;
    --van-tabs-bottom-bar-color: var(--primary-color);
}
</style>