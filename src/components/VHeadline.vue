<template>
  <h1 :class="classes">
    <b><slot></slot></b>
  </h1>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  props: {
    xlarge: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    xsmall: {
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
        'headline-1': this.xlarge,
        'headline-2': this.large,
        'headline-3': this.small,
        'headline-4': this.xsmall,
      };

      return Object.assign(
        this.animationsMixins,
        classes,
      );
    },
  },
};
</script>
