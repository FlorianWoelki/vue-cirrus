<template>
  <h1 :class="[
    this.animationsMixins,
    this.size ? `headline-${this.size}` : null,
    {
      'uppercase': this.uppercase,
    },
  ]">
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
    size: {
      type: String,
      default: null,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
