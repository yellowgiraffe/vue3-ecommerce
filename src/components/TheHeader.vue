<script setup>
import { useCartStore } from '../stores/CartStore'
const cartStore = useCartStore()
</script>
<template>
  <header class="flex justify-between	container mx-auto my-8 font-semibold">
    <div class="flex">
      <a href="/"><img src="../assets/img/logo.svg" class="mr-5" alt="Logo" ></a>
      <nav>
        <router-link to="/" class="mr-5">Home</router-link>
        <router-link to="/products" class="mr-5">Shop</router-link>
        <router-link to="/blog" class="mr-5">Blog</router-link>
        <router-link to="/productReform">Product Reform</router-link>
      </nav>
    </div>
    <div class="flex items-center">
      <router-link to="/cart" class="flex mr-3">
        <img src="../assets/img/shopping-cart.svg" class="inline-block" alt="Shopping cart">
        <div class="w-5 h-5 relative right-3 text-center text-xs leading-5 bg-lime-600 text-white rounded-full px-1">
          <span>{{ cartStore.count }}</span>
        </div>
      </router-link>
      <router-link to="/signin" custom v-slot="{ navigate }" >
        <button
          role="link"
          class="rounded text-white bg-lime-600 px-4 py-1"
          @click="navigate"
        >
          Sign In
        </button>
      </router-link>
    </div>
  </header>
</template>