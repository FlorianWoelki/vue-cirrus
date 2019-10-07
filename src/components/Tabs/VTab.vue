<template>
  <li :class="classes">
    <a :href="href">
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
    selected: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        {
          selected: this.selected,
        },
      );
    },
  },
};
</script>
