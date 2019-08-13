<template>
  <button
    v-if="href === ''"
    :class=classes
    :data-tooltip=tooltipData
    @click="onClick"
  >
    <slot></slot>
  </button>
  <a
    v-else
    :href="href"
    :target="blank ? '_blank' : ''"
  >
    <button
      :class=classes
      :data-tooltip=tooltipData
      @click="onClick"
    >
      <slot></slot>
    </button>
  </a>
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
    onClick: {
      type: Function,
      default: () => 1,
    },
    href: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    accent: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    outlineInverted: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    black: {
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
    loadingLeft: {
      type: Boolean,
      default: false,
    },
    loadingRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const classes = {
        'btn-animated': this.animated,
        'btn-accent': this.accent,
        'btn-outline': this.outline,
        'btn-outline-inverted': this.outlineInverted,
        'btn-transparent': this.transparent,
        'btn-light': this.light,
        'btn-dark': this.dark,
        'btn-black': this.black,
        'btn-tiny': this.xsmall,
        'btn-small': this.small,
        'btn-large': this.large,
        'btn-xlarge': this.xlarge,
        'animated loading loading-left': this.loadingLeft,
        'animated loading loading-right': this.loadingRight,
      };

      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        classes,
      );
    },
  },
};
</script>
