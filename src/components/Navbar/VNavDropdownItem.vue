<template>
  <li
    :class=classes
    role="menu-item"
    :data-tooltip=tooltipData
  >
    <a
      :href=href
      :target="blank ? '_blank' : ''"
    >
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
    blank: {
      type: Boolean,
      default: false,
    },
    href: {
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
