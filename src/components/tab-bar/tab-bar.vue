<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex"  active-color="#ff9854" route>
      <template v-for="item in tabbarData" :key="item.id" >
        <van-tabbar-item icon="home-o" :to="item.path" replace >
            <span>{{ item.text }}</span>
            <template #icon>
              <img v-if="currentIndex !== item.id-1" :src="getAssetURL(item.image)" alt="">
              <img v-else :src="getAssetURL(item.imageActive)" alt="">
            </template> 
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import {getAssetURL} from "@/utils/load_assets.js"
import tabbarData  from "@/assets/data/tabbar.js"
import {ref, watch} from "vue"
import { useRoute } from "vue-router";
const currentIndex=ref(0);
const route=useRoute()

watch(route,(newRoute)=>{
  const index=tabbarData.findIndex(item=>item.path==newRoute.path)
  if(index==-1)return 
  currentIndex.value=index
})



</script>

<style lang="less" scoped >
.tab-bar {
  // 局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
//--van-tabbar-item-font-size:30px !important;
/*:deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }*/
  img {
    height: 26px;
  }
}
</style>