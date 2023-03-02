<template>
  <div>
    <router-view />
    <TabBar v-if="!router.meta.hideTabbar"></TabBar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tab-bar/tab-bar.vue"

const router=useRoute();
</script>

<style>

</style>