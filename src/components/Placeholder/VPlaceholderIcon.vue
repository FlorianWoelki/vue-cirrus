<template>
  <div :class=classes>
    <span class="icon">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
    Tooltip,
    Animations,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
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
