<script setup lang="ts">
import { useCounter } from "~/composables/useCounter";

// 可以選擇使用 import 或 auto import 的方式進行導入
// import Header from "@/components/Header.vue";
const { count, increment, decrement } = useCounter();
const title = ref("計時器");
</script>
<template>
  <div>
    <!-- components 裡面的 Header.vue -->
    <Header />
    <h1 class="text-primary">Page: 首頁</h1>
    <!-- <HomeBanner/> -->
    <h2>產品</h2>
    <HomeProduct
      imageSrc="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
      altText="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢"
      title="尊爵雙人房"
      price="NT$10000"
      buttonText="馬上預約"
    />

    <h2>{{ title }}</h2>
    <div class="counter">
      <button type="button" @click="decrement">減少</button>
      <p>{{ count }}</p>
      <button type="button" @click="increment">增加</button>
    </div>

    <p>目前路由的路徑 - route.fullPath 為 : /</p>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  gap: 10px;
}
</style>
