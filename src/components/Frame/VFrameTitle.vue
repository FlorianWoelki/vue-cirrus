<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          frame__title: true,
        },
      );
    },
  },
};
</script>
