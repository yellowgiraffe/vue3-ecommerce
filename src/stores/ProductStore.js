import { createClient } from 'contentful'

import { defineStore } from 'pinia'
// import { useMovieStore } from './MovieStore'
import { ref } from 'vue'

export const useProductStore = defineStore('productStore', () => {
  const isLoading = ref(false)
  const products = ref([])
  const product = ref(null)
  
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
  })

  const fetchProductList = async (filter) => {
    isLoading.value = true
    const response = await client.getEntries({
      content_type: 'juice',
      skip: (filter.page - 1) * 6,
      limit: 6,
      order: filter.order// '-sys.createdAt',
    })
    products.value = response
    // client
    //   .getEntries()
    //   .then((entry) => console.log(entry))
    //   .catch((err) => console.log(err))
    // const response = await fetch(`${import.meta.env.VITE_BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`)
    // const data = await response.json()
    // products.value = data.results
    isLoading.value = false
  }

  const fetchProductItem = async (id) => {
    isLoading.value = true
    const response = await client.getEntry(id)
    console.log(response)
    product.value = response
    // client
    //   .getEntries(id)
    //   .then((entry) => console.log(entry.json()))
    //   .catch((err) => console.log(err))
    // const response = await fetch(`${import.meta.env.VITE_BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`)
    // const data = await response.json()
    // products.value = data.results
    isLoading.value = false
  }
  
  // const addToFavorite = (movie) => {
  //   const movieStore = useMovieStore()
  //   movieStore.movies.push({ ...movie, isWatched: false })
  //   movieStore.activeTab = 1
  // }
  
  return {
    isLoading, products, product, fetchProductList, fetchProductItem
  }
})
