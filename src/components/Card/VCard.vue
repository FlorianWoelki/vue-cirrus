<template>
  <div
    :class="[
      animationsMixins,
      'card',
      {
        'slide-up': animated,
        'u-flex u-flex-column h-100': equalHeight,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  provide() {
    return {
      animated: this.animated,
    };
  },

  props: {
    animated: Boolean,
    equalHeight: Boolean,
  },
};
</script>
