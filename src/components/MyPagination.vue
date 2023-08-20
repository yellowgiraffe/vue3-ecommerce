<script setup>

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: false,
    default: 1
  },
  perPage: {
    type: Number,
    required: false,
    default: 10
  },
})

const btns = Math.ceil(props.totalItems / props.perPage)
</script>

<template>
  <div>
  <div>Page nr: {{ page }}, {{totalItems}}, {{btns}}</div>
    <button
      v-for="index in btns"
      :key="index"
      class="border rounded px-3 py-1 mx-1"
      @click="$emit('change-page', index)"
    >
      {{ index }}
    </button>
  </div>
</template>