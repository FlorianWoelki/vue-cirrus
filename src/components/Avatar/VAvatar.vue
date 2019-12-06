<template>
  <figure :class="[
      tooltipMixins,
      animationsMixins,
      'avatar',
      {
        'avatar--xsmall': xsmall,
        'avatar--small': small,
        'avatar--large': large,
        'avatar--xlarge': xlarge,
      },
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
    src: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    padded: {
      type: Boolean,
      default: false,
    },
    xsmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xlarge: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
