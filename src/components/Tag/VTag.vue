<template>
  <div v-if="!closable" :class="classes">
    <slot></slot>
    <div v-if="deletable" class="tag tag--delete"></div>
  </div>
  <div v-else :class="classes"></div>
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
    closable: {
      type: Boolean,
      default: false,
    },
    deletable: {
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
    white: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        {
          tag: true,
          'tag--white': this.white,
          'tag--black': this.black,
          'tag--primary': this.primary,
          'tag--link': this.link,
          'tag--info': this.info,
          'tag--success': this.success,
          'tag--warning': this.warning,
          'tag--danger': this.danger,
          'tag--large': this.large,
          'tag--xlarge': this.xlarge,
          'tag--rounded': this.rounded,
          'tag__close-btn': this.closable,
        },
      );
    },
  },
};
</script>
