<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);
</script>
<template>
  <div>
    <header>
      <ul class="list">
        <!-- <li>
          <NuxtLink></NuxtLink>
        </li> -->
        <li>
          <NuxtLink :to="`${route.fullPath}/example`">範例練習</NuxtLink>
        </li>
      </ul>
    </header>
    <slot />
  </div>
</template>
<style scoped></style>
