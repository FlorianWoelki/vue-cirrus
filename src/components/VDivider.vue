<template>
  <div :class=classes></div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  props: {
    short: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          divider: true,
          'divider-short': this.short,
        },
      );
    },
  },
};
</script>
