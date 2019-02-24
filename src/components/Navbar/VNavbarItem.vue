<template>
  <div :class=classes :data-tooltip=tooltipData>
    <a :href=link>
      <slot></slot>
    </a>
  </div>
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
    selected: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        {
          'nav-item': true,
          selected: this.selected,
        },
      );
    },
  },
};
</script>
