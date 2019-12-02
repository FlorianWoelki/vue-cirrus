<template>
  <div :class="[
    'btn-group',
    {
      'btn-group-fill': filled,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
