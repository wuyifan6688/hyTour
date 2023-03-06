<template>
  <div>
    <router-view v-slot="{ Component }">
  <keep-alive include="home">
    <component :is="Component" />
  </keep-alive>
</router-view>


    <TabBar v-show="!router.meta.hideTabbar"></TabBar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tab-bar/tab-bar.vue"

const router=useRoute();
</script>

<style>

</style>