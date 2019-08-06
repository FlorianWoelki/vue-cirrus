<template>
  <li
    :class=classes
    role="menu-item"
    :data-tooltip=tooltipData
  >
    <a :href=link>
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Layout from '@/mixins/layout';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
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
        this.tooltipMixins,
      );
    },
  },
};
</script>
