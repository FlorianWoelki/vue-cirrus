<template>
  <div v-if="!closable" :class="classes">
    <slot></slot>
    <div v-if="deletable" class="tag tag--delete"></div>
  </div>
  <div v-else :class="classes"></div>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],

  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    deletable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        this.tooltipMixins,
        this.animationsMixins,
        'tag',
        `tag--${this.size}`,
        `tag--${this.color}`,
        {
          'tag--rounded': this.rounded,
          'tag__close-btn': this.closable,
        },
      ];
    },
  },
};
</script>
