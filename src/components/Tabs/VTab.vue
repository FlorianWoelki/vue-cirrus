<template>
  <li :class="[
    this.tooltipMixins,
    {
      selected: this.selected,
    },
  ]">
    <a
      :href="href"
      @click="$emit('click', $event)"
    >
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
    selected: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '#!',
    },
  },
};
</script>
