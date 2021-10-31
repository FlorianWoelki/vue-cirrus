<template>
  <span
    :class="
      animation === 'square'
        ? 'usquare'
        : animation === 'dSquare'
        ? 'usquare delay'
        : null
    "
  >
    <a
      v-bind="$attrs"
      :data-tooltip="tooltipText"
      :class="[
        tooltipClasses,
        animationClasses,
        animationMap[animation],
        {
          underline: underlined
        }
      ]"
    >
      <slot></slot>
    </a>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    underlined: Boolean,
    animation: {
      type: String,
      default: null,
      validator: (value: string) => [
          'ltr',
          'rtl',
          'c',
          'oltr',
          'ortl',
          'oc',
          'olr',
          'orl',
          'square',
          'dSquare',
        ].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const animationMap = ref({
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
    });

    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
      animationMap,
    };
  },
  data() {
    return {};
  },
});
</script>
