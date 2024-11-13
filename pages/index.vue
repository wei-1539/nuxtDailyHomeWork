<script setup>
// 可以選擇使用 import 或 auto import 的方式進行導入
// import Header from "@/components/Header.vue";
import axios from "axios";
const { data } = await useAsyncData("FreyjaHotelAPI", async () => {
  const res = await axios.get("https://nuxr3.zeabur.app/api/v1/home/news/");
  console.log(res);

  return res.data;
});
// fetch("https://nuxr3.zeabur.app/api/v1/home/news/", { method: "GET" })
//   .then((response) => response.json())
//   .then((res) => {
//     // { status: 'true', result: [{...}] }
//     console.log(res);
//   });
</script>
<template>
  <div>
    <!-- components 裡面的 Header.vue -->
    <Header />
    <h1 class="text-primary">Page: 首頁</h1>
    {{ data }}

    <p>目前路由的路徑 - route.fullPath 為 : /</p>
  </div>
</template>

<style scoped></style>
