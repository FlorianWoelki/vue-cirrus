<template>
  <div class="placeholder">
    <h6 class="placeholder-title">{{ title }}</h6>
    <div class="placeholder-subtitle">{{ subtitle }}</div>
    <slot></slot>
    <div class="placeholder-commands u-center">
      <slot name="commands"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Coming Soon',
    },
    subtitle: {
      type: String,
      default: 'We are currently working on this segment! :)',
    },
  },
});
</script>
