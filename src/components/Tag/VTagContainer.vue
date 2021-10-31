<template>
  <div
    :class="[
      tooltipClasses,
      animationClasses,
      'tag-container',
      {
        'group-tags': grouped,
        'tag-container-rounded': rounded
      }
    ]"
  >
    <slot></slot>
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
  props: {
    ...withTooltipProps(),
    ...withAnimationProps(),
    grouped: Boolean,
    rounded: Boolean,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>

<style>
.tag-container.group-tags.tag-container-rounded .tag:first-child {
  border-radius: 290486px 0 0 290486px;
}
.tag-container.group-tags.tag-container-rounded .tag:last-child {
  border-radius: 0 290486px 290486px 0;
}
</style>
