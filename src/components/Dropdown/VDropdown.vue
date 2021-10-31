<template>
  <div
    :class="[
      animationClasses,
      tooltipClasses,
      'list-dropdown',
      {
        'dropdown-right': right,
        'dropdown-left': left
      }
    ]"
    :data-tooltip="tooltipText"
  >
    <slot name="button"></slot>
    <ul class="menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { withAnimationClasses, withAnimationProps } from '@/mixins/animations';
import { withTooltipClasses, withTooltipProps } from '@/mixins/tooltip';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    right: Boolean,
    left: Boolean,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
