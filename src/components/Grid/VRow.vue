<template>
  <div :class=classes>
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
    fluid: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          row: true,
          'fluid-container': this.fluid,
          wrap: this.wrap,
        },
      );
    },
  },
};
</script>
