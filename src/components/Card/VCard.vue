<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
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

<style>
.card.slide-up {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  max-height: 550px;
}
</style>
