<template>
  <div :class="[
    'space',
    {
      'large': large && !xlarge,
      'xlarge': xlarge,
    },
  ]">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    large: Boolean,
    xlarge: Boolean,
  },
});
</script>
