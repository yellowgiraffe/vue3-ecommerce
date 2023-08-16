<script setup>
import { useCartStore } from '../stores/CartStore'
import ProductCounter from '../components/products/ProductCounter.vue';

const cartStore = useCartStore()

const changeProductAmount = (count, idx) => {
  cartStore.products[idx].count = count
}

const deleteProduct = (idx) => {
  cartStore.products.splice(idx, 1)
}
</script>
<template>
  <section class="container mx-auto mb-20">
    <h1 class="text-3xl mb-4">Cart</h1>
    <div
      v-for="(product, idx) in cartStore.products"
      :key="product.sys.id"
      class="flex items-center rounded border p-6 mb-4"
    >
      <div>
        <img
          :src="product.fields.image[0].fields.file.url"
          :alt="product.fields.image[0].fields.description"
          class="w-14 mr-5"
        >
      </div>
      <div>
        <h2 class="font-medium">
          {{ product.fields.name }}
        </h2>
        <span class="text-sm">Product code: {{ product.sys.id }}</span>
      </div>
      <div class="flex items-center ml-auto">
        <div class="text-right w-16 mr-4">${{ product.fields.price }}</div> X
        <ProductCounter :counter="product.count" class="ml-4" @changed="changeProductAmount($event, idx)" />
        <div class="text-xl font-bold w-20 text-right mx-4">${{ (product.fields.price * product.count).toFixed(2) }}</div>
        <button @click="deleteProduct(idx)"><img class="w-8" src="../assets/img/delete.svg" alt="Delete product"></button>
      </div>
    </div>
  </section>
</template>