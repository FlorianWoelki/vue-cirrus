<template>
  <div :class="[
    this.animationsMixins,
    this.tooltipMixins,
    'placeholder-icon',
  ]">
    <span class="icon">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],
};
</script>
