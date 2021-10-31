<template>
  <div
    class="tile"
    :style="
      enableBoxShadow
        ? 'box-shadow: 0 3px 6px rgba(0,0,0,0.06)' +
          ', 0 3px 6px rgba(0,0,0,0.03); padding: 1rem 2rem'
        : null
    "
  >
    <div v-if="$slots['icon']" class="tile__icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    enableBoxShadow: Boolean,
  },
});
</script>
