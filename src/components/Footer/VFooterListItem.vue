<template>
  <a v-if="!title">
    <li :class="classes" :data-tooltip="tooltipText">
      <slot />
    </li>
  </a>
  <li v-else :class="classes" :data-tooltip="tooltipText">
    <slot />
  </li>
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
    title: Boolean,
  },
  setup(props) {
    const classes = computed(() => Object.assign({
        ...withAnimationClasses(props).animationClasses,
        ...withTooltipClasses(props).tooltipClasses,
        'footer__list-item': !props.title,
        'footer__list-title': props.title,
      }));

    return {
      classes,
    };
  },
});
</script>
