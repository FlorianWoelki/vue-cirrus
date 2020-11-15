<template>
  <li :class="[
    tooltipMixins,
    {
      selected: selected,
    },
  ]">
    <a v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Tooltip,
  ],

  props: {
    selected: Boolean,
  },
};
</script>
