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
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
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
        this.tooltipMixins,
      );
    },
  },
};
</script>
