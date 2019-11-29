<template>
  <h1 :class="classes">
    <b><slot></slot></b>
  </h1>
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
    h1: {
      type: Boolean,
      default: false,
    },
    h2: {
      type: Boolean,
      default: false,
    },
    h3: {
      type: Boolean,
      default: false,
    },
    h4: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const classes = {
        uppercase: this.uppercase,
        'headline-1': this.h1,
        'headline-2': this.h2,
        'headline-3': this.h3,
        'headline-4': this.h4,
      };

      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        classes,
      );
    },
  },
};
</script>
