<template>
  <p v-if="!animated" class="title">
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inject: {
    cardImage: { default: '' },
    animated: { default: false },
  },
});
</script>
