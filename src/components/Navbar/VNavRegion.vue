<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        'nav-left': this.left,
        'nav-right': this.right,
        'nav-center': this.center,
      };
    },
  },
};
</script>
