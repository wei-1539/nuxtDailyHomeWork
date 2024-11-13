<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);
</script>
<template>
  <div>
    <h1>每日列表</h1>
    <ul class="navlist">
      <li>
        <NuxtLink :to="`${route.fullPath}/day2`">Day 2</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`${route.fullPath}/day4`">Day 4</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`${route.fullPath}/day5`">Day 5</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
