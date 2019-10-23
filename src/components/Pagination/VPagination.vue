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
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        pagination: true,
        'pagination-bordered': this.bordered,
        dark: this.dark,
      };
    },
  },
};
</script>

<style>
.pagination.pagination-bordered.dark .pagination-item.short a {
  border-color: #272727;
  color: rgb(200, 200, 200);
}
</style>
