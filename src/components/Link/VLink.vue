<template>
  <span
    :class="animation === 'square' ? 'usquare' : animation === 'dSquare' ? 'usquare delay' : null"
  >
    <a
      v-bind="$attrs"
      v-on="$listeners"
      :data-tooltip=tooltipData
      :class="[
        tooltipMixins,
        animationsMixins,
        {
          'u u-LR': animation === 'ltr',
          'u u-RL': animation === 'rtl',
          'u u-C': animation === 'c',
          'utb utb-LR': animation === 'oltr',
          'utb utb-RL': animation === 'ortl',
          'utb utb-C': animation === 'oc',
          'utb utb-OLR': animation === 'olr',
          'utb utb-ORL': animation === 'orl',
          'utb utb-OLR': animation === 'dSquare' || animation === 'square',
          underline: underlined,
        },
      ]"
    >
      <slot></slot>
    </a>
  </span>
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
    underlined: Boolean,
    animation: {
      type: String,
      default: null,
      validator: value => [
        'ltr', 'rtl', 'c', 'oltr', 'ortl', 'oc', 'olr',
        'orl', 'square', 'dSquare',
      ].indexOf(value) !== -1,
    },
  },
};
</script>
