<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.animationsMixins,
        {
          frame__subtitle: true,
        },
      );
    },
  },
};
</script>
