<template>
  <a v-if="!title">
    <li :class="classes" :data-tooltip="tooltipData">
      <slot />
    </li>
  </a>
  <li v-else :class="classes" :data-tooltip="tooltipData">
    <slot />
  </li>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],

  props: {
    title: Boolean,
  },

  computed: {
    classes() {
      return Object.assign(
        this.tooltipMixins,
        this.animationsMixins,
        {
          'footer__list-item': !this.title,
          'footer__list-title': this.title,
        },
      );
    },
  },
};
</script>
