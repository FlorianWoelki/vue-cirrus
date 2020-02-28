<template>
  <figure :class="[
      tooltipMixins,
      animationsMixins,
      'avatar',
      {
        'avatar--xsmall': size === 'xsmall',
        'avatar--small': size === 'small',
        'avatar--large': size === 'large',
        'avatar--xlarge': size === 'xlarge',
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
    size: {
      type: String,
      default: null,
    },
  },
};
</script>
