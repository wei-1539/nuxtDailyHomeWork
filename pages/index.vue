<script setup>
// 可以選擇使用 import 或 auto import 的方式進行導入
// import Header from "@/components/Header.vue";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const { newsList, isLoading, getList } = useHome();
await getList();
</script>
<template>
  <div>
    <!-- components 裡面的 Header.vue -->
    <Header />
    <h1 class="text-primary">Page: 首頁</h1>
    {{ newsList }}
    <NewCardDay5 v-for="item in newsList" :key="item.id" v-bind="item" />
    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
    <p>目前路由的路徑 - route.fullPath 為 : /</p>
  </div>
</template>

<style scoped></style>
