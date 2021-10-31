<template>
  <div
    :class="[
      'tab-container',
      size ? `tabs-${size}` : null,
      mode ? `tabs-${mode}` : null,
      position ? `tabs-${position}` : null
    ]"
  >
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: String,
    position: String,
    mode: String,
  },
});
</script>
