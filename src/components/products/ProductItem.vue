<script setup>
import { useCartStore } from '../../stores/CartStore'

defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {}
  },
})

const cartStore = useCartStore()
</script>
<template>
  <div class="w-1/4 mb-4">
    <img
      :src="product.fields.image[0].fields.file.url"
      :alt="product.fields.image[0].fields.description"
      class="mx-auto h-80 cursor-pointer"
      @click="$router.push(`/products/${product.sys.id}`)"
    >
    <router-link :to="'/products/' + product.sys.id">
      <h2 class="text-lg font-medium">{{ product.fields.name }}</h2>
    </router-link>
    <div class="mb-4">${{ product.fields.price }}</div>
    <button class="border border-lime-600 hover:bg-lime-600 hover:text-white duration-200	px-4 py-1" @click="cartStore.addProduct(product, 1)">Add to card</button>
  </div>
</template>