<template>
  <div :class=classes></div>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        divider: true,
        'divider-short': this.short,
      };
    },
  },
};
</script>
