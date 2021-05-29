<template>
  <div v-if="!select" :data-tooltip="tooltipText" class="input-control">
    <label v-if="$slots['title']">
      <slot name="title" />
    </label>
    <div :class="icon ? 'input-control mt-0' : ''">
      <input
        v-bind="$attrs"
        v-on="{
          input: event => $emit('input', event.target.value)
        }"
        :class="inputClasses"
      />
      <span v-if="$slots.default" class="icon">
        <slot></slot>
      </span>
    </div>
    <span v-if="$slots['info']" class="info u-text-center">
      <slot name="info" />
    </span>
  </div>
  <div v-else class="input-control">
    <select v-bind="$attrs" :class="inputClasses" :data-tooltip="tooltipText">
      <slot></slot>
    </select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue-demi';
import { withAnimationClasses, withAnimationProps } from '../../mixins/animations';
import { withTooltipClasses, withTooltipProps } from '../../mixins/tooltip';

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...withAnimationProps(),
    ...withTooltipProps(),
    pilled: Boolean,
    select: Boolean,
    focused: Boolean,
    success: Boolean,
    error: Boolean,
    size: String,
    icon: Boolean,
  },
  setup(props) {
    const inputClasses = computed(() => [
        props.size ? `input-${props.size}` : null,
        {
          ...withAnimationClasses(props).animationClasses,
          ...withTooltipClasses(props).tooltipClasses,
          select: props.select,
          'input-focused': props.focused,
          'text-success input-success': props.success,
          'text-danger input-error': props.error,
          'input-contains-icon': props.icon,
          'input-control--pilled': props.pilled,
        },
      ]);

    return {
      inputClasses,
    };
  },
});
</script>
