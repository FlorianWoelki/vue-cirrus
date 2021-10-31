<template>
  <button
    v-bind="$attrs"
    :class="[
      tooltipClasses,
      animationClasses,
      color ? `btn-${color}` : null,
      size ? `btn-${size}` : null,
      {
        'btn-animated': animated,
        outline: outline,
        'btn--pilled': pilled,
        'btn--circle': circle,
        'btn-dropdown': dropdown,
        'm-0': dropdown
      }
    ]"
    :data-tooltip="tooltipText"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    dropdown: Boolean,
    pilled: Boolean,
    circle: Boolean,
    animated: Boolean,
    outline: Boolean,
    color: String,
    size: String,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
