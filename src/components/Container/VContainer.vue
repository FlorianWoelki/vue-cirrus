<template>
  <div :class="[
    {
      'content': !noPadding && !fluid,
      'content-no-padding': noPadding && !fluid,
      'content-fluid': fluid,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    noPadding: Boolean,
    fluid: Boolean,
  },
});
</script>
