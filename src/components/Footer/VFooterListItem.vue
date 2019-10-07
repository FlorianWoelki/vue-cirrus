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
import Layout from '@/mixins/layout';
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
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
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        {
          'list-item': !this.title,
          'footer-list-title': this.title,
        },
      );
    },
  },
};
</script>
