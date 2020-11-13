<template>
  <div v-if="!closable" :class="classes">
    <slot></slot>
    <div v-if="deletable" class="tag tag__delete"></div>
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
    closable: Boolean,
    deletable: Boolean,
    size: String,
    color: String,
    rounded: Boolean,
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
