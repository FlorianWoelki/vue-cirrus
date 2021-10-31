<template>
  <div
    :class="[
      'grid',
      gap ? `grid-gap-${gap}` : null,
      cols ? `grid-cols-${cols}` : null
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    gap: String,
    cols: String,
  },
});
</script>
