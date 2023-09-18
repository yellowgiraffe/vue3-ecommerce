<script setup>
import { createToast } from 'mosha-vue-toastify'
import { useCartStore } from '../../stores/CartStore'

import 'mosha-vue-toastify/dist/style.css'

defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {}
  },
})

const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addProduct(product, 1)
  createToast(`${product.fields.name} was added to your cart`, {
    type: 'success',
    position: 'top-center',
    toastBackgroundColor: '#65a30d',
    hideProgressBar: true
  })
}
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
    <button
      class="border border-lime-600 hover:bg-lime-600 hover:text-white duration-200	px-4 py-1"
      @click="addToCart(product)"
    >
      Add to card
    </button>
  </div>
</template>