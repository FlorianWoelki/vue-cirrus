<template>
  <div v-if="!animated" :class="cardClasses">
    <slot />
  </div>
  <div v-else :class="cardClasses">
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
    animated: {
      type: Boolean,
      default: false,
    },
    equalHeight: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cardClasses() {
      return Object.assign(
        this.animationsMixins,
        {
          card: true,
          'slide-up': this.animated,
          'u-flex u-flex-column h-100': this.equalHeight,
          dark: this.dark,
        },
      );
    },
  },
};
</script>

<style>
.card.dark {
  background-color: #272727;
  color: white;
}
</style>
