<template>
  <div
    :class="[
      tooltipMixins,
      animationsMixins,
      'nav-item',
      {
        active: active,
      },
    ]"
    :data-tooltip="tooltipData"
  >
    <a v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  inheritAttrs: false,
  mixins: [
    Tooltip,
    Animations,
  ],

  props: {
    active: Boolean,
  },
};
</script>
