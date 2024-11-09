<script setup>
const { count, increment, decrement } = useCounter();
const title = ref("計時器");
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="counter">
      <button type="button" @click="decrement">減少</button>
      <p>{{ count }}</p>
      <button type="button" @click="increment">增加</button>
    </div>
  </div>
</template>
<style scoped>
.counter {
  display: flex;
  gap: 10px;
}
</style>
