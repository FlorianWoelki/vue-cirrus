<template>
  <textarea
    :data-tooltip="tooltipText"
    :class="[tooltipClasses, animationClasses]"
  ></textarea>
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
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
