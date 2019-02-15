<template>
  <button
    :class=classes
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    btnStyle: {
      type: String,
      default: '',
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
    extraLarge: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const buttonStyles = ['accent', 'outline', 'outline-inverted', 'transparent', 'light', 'dark', 'black'];
      const btnStyle = buttonStyles.includes(this.btnStyle) ? this.btnStyle : null;

      const classes = {
        'btn-animated': this.animated,
        [`btn-${this.btnStyle}`]: btnStyle != null,
        'btn-tiny': this.tiny,
        'btn-small': this.small,
        'btn-large': this.large,
        'btn-xlarge': this.extraLarge,
      };

      return classes;
    },
  },
};
</script>
