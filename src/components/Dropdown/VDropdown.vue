<template>
  <div
    :class="[
      this.animationsMixins,
      this.tooltipMixins,
      'list-dropdown',
      {
        'dropdown-right': this.right,
        'dropdown-left': this.left,
        'dark': this.dark,
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
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.list-dropdown.dark .menu {
  background-color: #272727;
}
</style>
