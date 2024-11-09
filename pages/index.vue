<script setup lang="ts">
// 可以選擇使用 import 或 auto import 的方式進行導入
// import Header from "@/components/Header.vue";
</script>
<template>
  <div>
    <!-- components 裡面的 Header.vue -->
    <Header />
    <h1 class="text-primary">Page: 首頁</h1>
    <p>目前路由的路徑 - route.fullPath 為 : /</p>
  </div>
</template>

<style scoped></style>
