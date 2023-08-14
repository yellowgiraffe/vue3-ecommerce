<script setup>
import { useProductStore } from '../stores/ProductStore'
import ProductItem from '../components/shop/ProductItem.vue'

const productStore = useProductStore()
productStore.fetchProductList()


</script>

<template>
  <section class="bg-lime-600 py-8 mb-12">
    <div class="container mx-auto text-center">
      <div class="search w-3/4 mx-auto">
        <input
          type="text"
          placeholder="Search everything Reform Juice"
          name=""
          id=""
          class="rounded-full outline-neutral-400	pl-6 pr-14 py-4 w-full"
        >
        <!-- <button class="search__button">
          <img src="../assets/img/search.svg" alt="">
        </button> -->
      </div>
    </div>
  </section>
  <section class="container mx-auto flex flex-wrap mb-20">
    <ProductItem v-for="(product, i) in productStore.products" :key="i" :product="product" />
  </section>
</template>

<style>
.search {
  position: relative;
}

.search__button {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  right: 20px;
  width: 100%;
  height: 100%;
}

/* .search::after {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  right: 20px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url('../assets/img/search.svg');
  background-position: center right;
  background-size: 30px 30px;
  background-repeat: no-repeat;
} */
</style>