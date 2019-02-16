<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        row: true,
        'fluid-container': this.fluid,
        wrap: this.wrap,
      };
    },
  },
};
</script>
