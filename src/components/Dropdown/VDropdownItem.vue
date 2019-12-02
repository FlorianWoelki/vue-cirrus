<template>
  <li
    :class="[
      this.animationsMixins,
      this.tooltipMixins,
      'menu-item',
    ]"
    :data-tooltip="tooltipData"
  >
    <a :href="href" @click="$emit('click', $event)">
      <slot></slot>
    </a>
  </li>
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
    href: {
      type: String,
      default: null,
    },
  },
};
</script>
