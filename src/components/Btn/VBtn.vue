<template>
  <button
    v-on="$listeners"
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      this.color ? `btn-${this.color}` : null,
      this.size ? `btn-${this.size}` : null,
      {
        'btn-animated': this.animated,
        'outline': this.outline,
        'btn--pilled': this.pilled,
        'btn--circle': this.circle,
        'btn-dropdown': this.dropdown,
        'm-0': this.dropdown,
      },
    ]"
    :data-tooltip="tooltipData"
  >
    <slot></slot>
  </button>
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
    dropdown: Boolean,
    pilled: Boolean,
    circle: Boolean,
    animated: Boolean,
    outline: Boolean,
    color: String,
    size: String,
  },
};
</script>
