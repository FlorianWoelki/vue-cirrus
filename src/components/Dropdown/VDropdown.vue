<template>
  <div
    :class="[
      this.animationsMixins,
      this.tooltipMixins,
      'list-dropdown',
      {
        'dropdown-right': this.right,
        'dropdown-left': this.left,
      },
    ]"
    :data-tooltip="tooltipData"
  >
    <slot name="button"></slot>
    <ul class="menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Animations,
    Tooltip,
  ],

  props: {
    right: Boolean,
    left: Boolean,
  },
};
</script>
