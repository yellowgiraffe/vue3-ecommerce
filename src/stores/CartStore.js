import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('CartStore', () => {
  const products = ref([])
  const count = computed(() => products.value.length)

  const cart = localStorage.getItem('products')
  if (cart) {
    products.value = JSON.parse(cart)._value
  }

  function addProduct(product, count) {
    const existingProduct = products.value.find(
      (p) => p.sys.id === product.sys.id
    )
    
    if (existingProduct) {
      existingProduct.count += count;
    } else {
      products.value.push({ ...product, count });
    }
    return count;
  }

  watch(() => products, (state) => {
    localStorage.setItem('products', JSON.stringify(state))
  }, { deep: true })
  return {
    products,
    count,
    addProduct
  }
})