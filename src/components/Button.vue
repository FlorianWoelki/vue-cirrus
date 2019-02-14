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
      const classes = {
        'btn-animated': this.animated,
        [`btn-${this.btnStyle}`]: true,
      };

      return classes;
    },
  },
};
</script>
