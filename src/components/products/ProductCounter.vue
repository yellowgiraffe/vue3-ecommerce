<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['changed'])
const props = defineProps({
  counter: Number
})

const amount = ref(props.counter)

watch(amount, (value) => {
  if (value === 0) amount.value = 1
  emit('changed', value)
})

watch(() => props.counter, (value) => {
  amount.value = value

})

</script>
<template>
  <span class="py-1 border rounded border-gray-400">
    <button
      :disabled="amount === 1"
      class="font-medium text-xl w-8"
      :class="amount === 1 ? 'text-gray-200' : 'text-gray-600'"
      @click="amount--"
    >
      -
    </button>
    <span class="text-sm px-3">{{ amount }}</span>
    <button
      class="text-gray-600 text-xl w-8"
      @click="amount++"
    >
      +
    </button>
  </span>
</template>