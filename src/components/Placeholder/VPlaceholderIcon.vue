<template>
  <div :class=classes>
    <span class="icon">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.animationsMixins,
        this.tooltipMixins,
        {
          'placeholder-icon': true,
        },
      );
    },
  },
};
</script>
