<template>
  <div
    :class=classes
    :data-tooltip=tooltipData
  >
    <a :href=href>
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
    active: {
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
        this.animationsMixins,
        {
          'nav-item': true,
          active: this.active,
        },
      );
    },
  },
};
</script>
