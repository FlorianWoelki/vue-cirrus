<template>
  <div
    v-if="!isClosed"
    :class="['toast', colorClass, tooltipClasses, animationClasses]"
    :data-tooltip="tooltipText"
  >
    <button
      v-if="closable"
      class="btn-close mt-1"
      @click="handleClose"
    ></button>
    <h4 v-if="title" class="toast__title">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';
import { withTooltipProps, withTooltipClasses } from '../../mixins/tooltip';

export default defineComponent({
  emits: ['close'],
  props: {
    ...withTooltipProps(),
    ...withAnimationProps(),
    title: String,
    color: String,
    disableCloseFunction: Boolean,
    closable: Boolean,
  },
  setup(props, { emit }) {
    const isClosed = ref<boolean>(false);

    const handleClose = (): void => {
      if (!props.disableCloseFunction) {
        isClosed.value = true;
      }

      emit('close');
    };

    const colorClass = computed((): string | null => (props.color ? `toast--${props.color}` : null));

    return {
      colorClass,
      isClosed,
      handleClose,
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
