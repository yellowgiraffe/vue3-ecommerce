<script setup>
import { useProductStore } from '../stores/ProductStore'
const productStore = useProductStore()

productStore.fetchProductItem()
</script>
<template>
  <div class="container">
    AAAAAAAAAAAAAAA!<br>
    ID: {{ $route.params.id }}
    {{ productStore.product }}
  </div>
</template>