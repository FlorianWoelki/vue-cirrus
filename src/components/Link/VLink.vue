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
        animationMap[animation],
        {
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

  data() {
    return {
      animationMap: {
        ltr: 'u u-LR',
        rtl: 'u u-RL',
        c: 'u u-C',
        oltr: 'utb utb-LR',
        ortl: 'utb utb-RL',
        oc: 'utb utb-C',
        olr: 'utb utb-OLR',
        orl: 'utb utb-ORL',
        square: 'utb utb-OLR',
        dSquare: 'utb utb-OLR',
      },
    };
  },

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
