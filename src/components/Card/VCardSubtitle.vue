<template>
  <span :class="!animated ? 'subtitle' : 'tile__subtitle'">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inject: {
    animated: { default: false },
  },
});
</script>
