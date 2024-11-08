<template>
  <div class="product-card">
    <Image :imageSrc="imageSrc" :altText="altText" />
    <Title :title="title" />
    <Price :price="price" />
    <Button :buttonText="buttonText" />
  </div>
</template>

<script setup>
import Image from "@/components/global/home/Product/Image.vue";
import Title from "@/components/global/home/Product/Title.vue";
import Price from "@/components/global/home/Product/Price.vue";
import Button from "@/components/global/home/Product/Button.vue";
defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  price: String,
  buttonText: String,
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>
