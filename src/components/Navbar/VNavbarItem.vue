<template>
  <div
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      'nav-item',
      {
        active: this.active,
        selected: this.selected,
      },
    ]"
    :data-tooltip="tooltipData"
  >
    <a
      :href="href"
      @click="$emit('click', $event)"
      :target="blank ? '_blank' : ''"
    >
      <slot></slot>
    </a>
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
    blank: Boolean,
    active: Boolean,
    selected: Boolean,
    href: String,
  },
};
</script>
