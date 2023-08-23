import { createClient } from 'contentful'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('productStore', () => {
  const isLoading = ref(false)
  const products = ref([])
  
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
  })

  const fetchProductList = async (filter) => {
    isLoading.value = true
    const response = await client.getEntries({
      content_type: 'juice',
      skip: (filter.page - 1) * filter.perPage,
      limit: filter.perPage,
      order: filter.order // '-sys.createdAt',
    })
    products.value = response
    isLoading.value = false
  }

  const fetchProductItem = async (id) => {
    isLoading.value = true
    const response = await client.getEntry(id)
    isLoading.value = false
    console.log(response)
    return response
  }
  
  return {
    isLoading, products, fetchProductList, fetchProductItem
  }
})
