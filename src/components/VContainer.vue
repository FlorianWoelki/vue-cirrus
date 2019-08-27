<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        {
          content: !this.noPadding && !this.fluid,
          'content-no-padding': this.noPadding && !this.fluid,
          'content-fluid': this.fluid,
        },
      );
    },
  },
};
</script>
