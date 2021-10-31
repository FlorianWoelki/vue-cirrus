<template>
  <div ref="el" class="form-group">
    <input
      v-bind="$attrs"
      type="search"
      :class="[animationClasses, tooltipClasses, 'form-group-input']"
      :data-tooltip="tooltipText"
      v-on="{
        input: event => $emit('input', event.target.value)
      }"
    />

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
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
  },
  setup(props) {
    const el = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (!el.value) {
        return;
      }

      for (let i = 0; i < el.value.children.length; i += 1) {
        if (el.value.children[i].tagName === 'BUTTON') {
          el.value.children[i].classList.add('form-group-btn');
        }
      }
    });

    return {
      el,
      ...withAnimationClasses(props),
      ...withTooltipClasses(props),
    };
  },
});
</script>
