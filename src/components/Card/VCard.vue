<template>
  <div
    :class="[
      this.animationsMixins,
      'card',
      {
        'slide-up': this.animated,
        'u-flex u-flex-column h-100': this.equalHeight,
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
