<template lang="">
  <div>
    <p class="product-price">{{ price }}</p>
  </div>
</template>
<script setup>
defineProps({
  price: String,
});
</script>
<style scoped>
.product-price {
  font-size: 16px;
  color: #007bff;
  text-align: center;
  margin-bottom: 16px;
}
</style>
