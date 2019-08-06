<template>
  <figure
    :class=avatarClasses
    :data-text=text
  >
    <img
      :src=src
      :class=imgClasses
    />
  </figure>
</template>

<script>
import Layout from '@/mixins/layout';
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
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

  computed: {
    avatarClasses() {
      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        {
          avatar: true,
          'img-xsmall': this.xsmall,
          'img-small': this.small,
          'img-large': this.large,
          'img-xlarge': this.xlarge,
        },
      );
    },
    imgClasses() {
      return {
        padded: this.padded,
      };
    },
  },
};
</script>
