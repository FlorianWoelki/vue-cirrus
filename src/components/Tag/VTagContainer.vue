<template>
  <div :class="[
    this.tooltipMixins,
    this.animationsMixins,
    'tag-container',
    {
      'group-tags': this.grouped,
      'tag-container-rounded': this.rounded,
    },
  ]">
    <slot></slot>
  </div>
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
    grouped: Boolean,
    rounded: Boolean,
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
