<template>
  <div :class=classes :data-tooltip=tooltipData>
    <a :href=link>{{text}}</a>
  </div>
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
    text: {
      type: String,
      default: '',
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
        {
          'nav-item': true,
          selected: this.selected,
        },
      );
    },
  },
};
</script>
