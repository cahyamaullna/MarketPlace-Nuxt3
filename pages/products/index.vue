<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

definePageMeta({
  layout: "products",
});

// fetch the products

const { data: products } = await axios.get("https://fakestoreapi.com/products");

useHead({
  title: 'Nuxt Lesson | Merch',
  meta: [
    { name: 'description', content: 'nuxt 3 merch' }
  ]
})

</script>

<style scoped>
</style>