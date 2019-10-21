<template>
  <p v-if="cardImage && !animated" class="title">
    <slot />
  </p>
  <p v-else-if="cardImage && animated" class="tile__title">
    <slot />
  </p>
  <div v-else class="card-head">
    <p class="card-head-title">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  inject: {
    cardImage: { default: '' },
    animated: { default: false },
  },
};
</script>

<style>
.card.dark .card-head {
  border-bottom: 1px solid #404040;
}
</style>
