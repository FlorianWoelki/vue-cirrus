<template>
  <figure :class="[
      tooltipMixins,
      animationsMixins,
      'avatar',
      size ? `avatar--${size}` : null,
    ]"
    :data-text="text"
  >
    <img
      v-if="src"
      :src="src.startsWith('http://') || src.startsWith('https://')
        ? src : require(`@/${src}`)"
      :class="[{ padded }]"
    />
  </figure>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Tooltip,
    Animations,
  ],

  props: {
    src: String,
    text: String,
    padded: Boolean,
    size: String,
  },
};
</script>
