<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        pagination: true,
        'pagination-bordered': this.bordered,
      };
    },
  },
};
</script>
