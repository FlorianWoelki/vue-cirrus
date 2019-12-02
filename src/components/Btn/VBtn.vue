<template>
  <button
    :class="classes"
    :data-tooltip="tooltipData"
    :disabled="disabled"
    @click="handleClick($event)"
  >
    <slot></slot>
  </button>
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
    pilled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    primary: {
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
    info: {
      type: Boolean,
      default: false,
    },
    link: {
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
    tiny: {
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
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },

  computed: {
    classes() {
      const classes = {
        'btn-animated': this.animated,
        'btn-primary': this.primary,
        'btn-transparent': this.transparent,
        'btn-light': this.light,
        'btn-dark': this.dark,
        'btn-black': this.black,
        'btn-info': this.info,
        'btn-link': this.link,
        'btn-success': this.success,
        'btn-warning': this.warning,
        'btn-danger': this.danger,
        'btn-tiny': this.tiny,
        'btn-small': this.small,
        'btn-large': this.large,
        'btn-xlarge': this.xlarge,
        outline: this.outline,
        'btn--pilled': this.pilled,
        'btn--circle': this.circle,
      };

      return Object.assign(
        this.tooltipMixins,
        this.animationsMixins,
        classes,
      );
    },
  },
};
</script>
