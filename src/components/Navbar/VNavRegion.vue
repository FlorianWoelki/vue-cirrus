<template>
  <div :class="position ? `nav-${position}` : null">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    position: String,
  },
});
</script>
