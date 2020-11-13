<template>
  <div :class="[
    'pagination',
    {
      'pagination-bordered': this.bordered,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bordered: Boolean,
  },
};
</script>
