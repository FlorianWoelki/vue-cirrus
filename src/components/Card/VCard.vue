<template>
  <div
    v-bind="$attrs"
    :class="[
      animationClasses,
      'card',
      {
        'slide-up': animated,
        'u-flex u-flex-column h-100': equalHeight
      }
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';

export default defineComponent({
  provide() {
    return {
      animated: this.animated,
    };
  },
  props: {
    ...withAnimationProps(),
    animated: Boolean,
    equalHeight: Boolean,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
    };
  },
});
</script>

<style>
.card.slide-up {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  max-height: 550px;
}
</style>
