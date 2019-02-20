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

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'card-body': this.$parent.animated,
          content: true,
        },
      );
    },
  },
};
</script>
