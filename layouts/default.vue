<script setup lang="ts"></script>

<template>
  <div>
    <header>
      預設模板的表頭
      <ul class="list">
        <li>
          <NuxtLink to="/">前台首頁</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">前台 About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/daily">前台 Daily</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin">前往 後台首頁</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/order">前往 後台訂單</NuxtLink>
        </li>
      </ul>
    </header>
    <slot />
    <footer>預設模板的表尾</footer>
  </div>
</template>

<style scoped></style>
