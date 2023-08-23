<script setup>
import { useProductStore } from '../stores/ProductStore'
import ProductItem from '../components/products/ProductItem.vue'
import MyPagination from '../components/MyPagination.vue'

const productStore = useProductStore()
const filter = {
  order: '-sys.createdAt',
  page: 1,
  perPage: 3,
}
productStore.fetchProductList(filter)
const changePage = (page) => {
  filter.page = page
  productStore.fetchProductList(filter)
}

</script>

<template>
  <section class="bg-lime-600 py-8 mb-12">
    <div class="container mx-auto text-center">
      <div class="search w-3/4 mx-auto">
        <input
          type="text"
          placeholder="Search everything Reform Juice (not implemented for now)"
          name=""
          id=""
          class="rounded-full outline-neutral-400	pl-6 pr-14 py-4 w-full"
        >
      </div>
    </div>
  </section>
  <section class="container mx-auto flex justify-between gap-4 flex-wrap mb-20">
    <ProductItem v-for="(product, i) in productStore.products.items" :key="i" :product="product" />
  </section>
  <section v-if="productStore.products.total" class="container mx-auto mb-20">
    <MyPagination
      class="text-center"
      :totalItems="productStore.products.total"
      :page="filter.page"
      :perPage="filter.perPage"
      @change-page="changePage"
    />
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