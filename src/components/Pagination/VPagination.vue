<template>
  <div
    :class="[
      'pagination',
      {
        'pagination-bordered': bordered
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    bordered: Boolean,
  },
});
</script>
