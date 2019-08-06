<template>
  <li
    :class=classes
    :data-tooltip=tooltipData
  >
    <a :href=link>
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
    Animations,
    Tooltip,
  ],

  props: {
    link: {
      type: String,
      default: '#',
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        this.tooltipMixins,
        {
          'menu-item': true,
        },
      );
    },
  },
};
</script>
