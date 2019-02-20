<template>
  <div class="action-bar">
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'action-bar': true,
        },
      );
    },
  },
};
</script>
