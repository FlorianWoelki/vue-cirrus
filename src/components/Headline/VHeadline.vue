<template>
  <h1 :class="[
    animationsMixins,
    size ? `headline-${size}` : null,
    {
      'uppercase': uppercase,
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
    size: String,
    uppercase: Boolean,
  },
};
</script>
