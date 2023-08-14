<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader/>
    <main class="h-full">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
</style>
