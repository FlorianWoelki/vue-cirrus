<template>
  <li
    :class="[
      tooltipClasses,
      {
        selected: selected
      }
    ]"
  >
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...withTooltipProps(),
    selected: Boolean,
  },
  setup(props) {
    return {
      ...withTooltipClasses(props),
    };
  },
});
</script>
