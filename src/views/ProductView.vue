<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { createToast } from 'mosha-vue-toastify'

import { useProductStore } from '../stores/ProductStore'
import { useCartStore } from '../stores/CartStore'

import ProductRating from '../components/products/ProductRating.vue'
import ProductCounter from '../components/products/ProductCounter.vue';

import 'mosha-vue-toastify/dist/style.css'

const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()

const counter = ref(1)
const product = ref(null)

onMounted(async () => {
  product.value = await productStore.fetchProductItem(route.params.id)
})

const addToCart = () => {
  cartStore.addProduct(product.value, counter.value)
  const toastText = counter.value === 1
    ? `${counter.value} X ${product.value.fields.name} was added to your cart`
    : `${counter.value} X ${product.value.fields.name} were added to your cart`
  createToast(toastText, {
    type: 'success',
    position: 'top-center',
    toastBackgroundColor: '#65a30d',
    hideProgressBar: true
  })
  counter.value = 1
}

</script>
<template>
  <div v-if="product" class="container mx-auto mb-24 pt-10">
    <section class="flex gap-10">
      <div class="w-1/3">
        <div class="bg-lime-100 mb-2">
          <img
            :src="product.fields.image[0].fields.file.url"
            :alt="product.fields.image[0].fields.description"
            class="mx-auto"
          >
        </div>
        <div class="grid grid-flow-col justify-stretch">
          <img
            v-for="(img, i) in product.fields.image"
            :key="i"
            :src="img.fields.file.url"
            :alt="img.fields.description"
            class="h-28 object-cover cursor-pointer"
          >
        </div>
      </div>
      <div>
        <h1 class="text-3xl font-light uppercase mb-1">
          {{ product.fields.name }}
        </h1>
        <div class="text-2xl font-medium mb-2">
          ${{ product.fields.price.toFixed(2) }}
        </div>
        <ProductRating
          :rating="product.fields.rating"
          class="mb-6"
        />
        <ProductCounter
          :counter="counter"
          class="mr-4"
          @changed="(value) => counter = value"
        />
        <button
          class="bg-lime-600 text-white font-medium rounded px-4 py-1 mb-6"
          @click="addToCart"
        >
          Add to cart
        </button>
        <hr class="mb-4">
        <div class="text-slate-600	">
          <h2 class="text-xl mb-2">About this Item</h2>
          <ul class="list-disc w-2/3 ml-2 list-image-[url(img/circle.svg)]">
            <li
              v-for="(item, i) in product.fields.description"
              :key="i"
              class="mb-2"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>