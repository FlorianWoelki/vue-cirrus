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
    accent: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    invertedOutline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn-animated': this.animated,
        'btn-accent': this.accent,
        'btn-outline': this.outline,
        'btn-outline-inverted': this.invertedOutline,
      };
    },
  },
};
</script>
