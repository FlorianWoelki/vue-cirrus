<template>
  <figure
    :class="[animationClasses, 'avatar', size ? `avatar--${size}` : null]"
    :data-text="text"
  >
    <img
      v-if="src"
      :src="
        src.startsWith('http://') || src.startsWith('https://')
          ? src
          : require(`@/${src}`)
      "
      :class="[{ padded }]"
    />
  </figure>
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
    src: String,
    text: String,
    padded: Boolean,
    size: {
      type: String,
      validator: (value: string) => ['xsmall', 'small', 'large', 'xlarge'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    return {
      ...withAnimationClasses(props),
    };
  },
});
</script>
