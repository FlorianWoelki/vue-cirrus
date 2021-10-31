<template>
  <div v-if="!closable" :class="classes">
    <slot></slot>
    <div v-if="deletable" class="tag tag__delete"></div>
  </div>
  <div v-else :class="classes"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    closable: Boolean,
    deletable: Boolean,
    size: String,
    color: String,
    rounded: Boolean,
  },
  setup(props) {
    const classes = computed(() => [
      withTooltipClasses(props).tooltipClasses,
      withAnimationClasses(props).animationClasses,
      'tag',
      props.size ? `tag--${props.size}` : null,
      props.color ? `tag--${props.color}` : null,
      {
        'tag--rounded': props.rounded,
        'tag__close-btn': props.closable,
      },
    ]);

    return {
      classes,
    };
  },
});
</script>
