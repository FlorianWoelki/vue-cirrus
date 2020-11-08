<template>
  <a v-if="!title" :href="href" :target="blank ? 'blank' : ''">
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
    title: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '#',
    },
    blank: {
      type: Boolean,
      default: false,
    },
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
