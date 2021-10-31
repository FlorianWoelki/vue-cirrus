<template>
  <h1
    :class="[
      animationClasses,
      size ? `headline-${size}` : null,
      {
        uppercase: uppercase
      }
    ]"
  >
    <b><slot></slot></b>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  withAnimationClasses,
  withAnimationProps,
} from '../../mixins/animations';

export default defineComponent({
  props: {
    ...withAnimationProps(),
    size: String,
    uppercase: Boolean,
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
    };
  },
});
</script>
