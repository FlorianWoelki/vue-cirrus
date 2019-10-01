<template>
  <div :class="classes">
    <slot></slot>
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
    grouped: {
      type: Boolean,
      default: false,
    },
    rounded: {
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
          'tag-container': true,
          'group-tags': this.grouped,
          'tag-container-rounded': this.rounded,
        },
      );
    },
  },
};
</script>

<style>
.tag-container.group-tags.tag-container-rounded .tag:first-child {
  border-radius: 290486px 0 0 290486px;
}
.tag-container.group-tags.tag-container-rounded .tag:last-child {
  border-radius: 0 290486px 290486px 0;
}
</style>
