<template>
  <!--
    TODO: Implement transparent, light gray, dark gray, black buttons &
    sizes
  -->
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
      default: '', // can be accent, outline, inverted-outline
    },
  },
  computed: {
    classes() {
      const buttonStyles = ['accent', 'outline', 'outline-inverted', 'transparent', 'light', 'dark', 'black'];
      const btnStyle = buttonStyles.includes(this.btnStyle) ? this.btnStyle : null;

      const classes = {
        'btn-animated': this.animated,
        [`btn-${this.btnStyle}`]: btnStyle != null,
      };

      return classes;
    },
  },
};
</script>
