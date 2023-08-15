<script setup>
defineProps({
  rating: String,
});
const ratingMap = {
  1: "⭐",
  2: "⭐⭐",
  3: "⭐⭐⭐",
  4: "⭐⭐⭐⭐",
  5: "⭐⭐⭐⭐⭐",
};
</script>
<template>
  <div>
    {{ rating ? ratingMap[rating] : "" }}
  </div>
</template>