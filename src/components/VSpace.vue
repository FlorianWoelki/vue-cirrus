<template>
  <div :class=classes>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: true,
    },
    xlarge: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        space: true,
        large: this.large,
        'x-large': this.xlarge,
      };
    },
  },
};
</script>

<style>
.space {
  display: block;
  width: 100%;
  height: 1rem;
}
.space.large {
  padding: 1rem 0;
}
.space.x-large {
  padding: 2rem 0;
}
</style>
