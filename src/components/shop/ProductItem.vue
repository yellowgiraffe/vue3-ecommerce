<script setup>
import { useCartStore } from '../../stores/CartStore'

const props = defineProps({
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
    <img class="mx-auto" src="../../assets/img/Orange mandarin.png" alt="">
    <router-link :to="'/products/' + product.sys.id">
      <h2 class="text-lg font-medium">{{ product.fields.name }}</h2>
    </router-link>
    <div class="mb-4">${{ product.fields.price }}</div>
    <button class="border border-lime-700	px-4 py-1" @click="cartStore.addProduct(product, 1)">Add to card</button>
  </div>
</template>