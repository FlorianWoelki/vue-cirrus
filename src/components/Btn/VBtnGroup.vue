<template>
  <div
    :class="[
      'btn-group',
      {
        'btn-group-fill': filled
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
    filled: Boolean,
  },
});
</script>
