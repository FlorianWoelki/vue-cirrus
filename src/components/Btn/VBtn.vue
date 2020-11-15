<template>
  <button
    v-on="$listeners"
    :class="[
      tooltipMixins,
      animationsMixins,
      color ? `btn-${color}` : null,
      size ? `btn-${size}` : null,
      {
        'btn-animated': animated,
        'outline': outline,
        'btn--pilled': pilled,
        'btn--circle': circle,
        'btn-dropdown': dropdown,
        'm-0': dropdown,
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
