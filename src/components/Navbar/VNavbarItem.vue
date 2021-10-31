<template>
  <div
    :class="[
      tooltipClasses,
      animationClasses,
      'nav-item',
      {
        active: active
      }
    ]"
    :data-tooltip="tooltipText"
  >
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    active: Boolean,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
