<template>
  <li
    :class="[
      tooltipMixins,
      {
        selected: selected
      }
    ]"
  >
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Tooltip from '@/mixins/tooltip';

export default {
  inheritAttrs: false,
  mixins: [Tooltip],

  props: {
    selected: Boolean,
  },
};
</script>
