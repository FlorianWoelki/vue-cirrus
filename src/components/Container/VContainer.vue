<template>
  <div :class="[
    {
      'content': !this.noPadding && !this.fluid,
      'content-no-padding': this.noPadding && !this.fluid,
      'content-fluid': this.fluid,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: Boolean,
    fluid: Boolean,
  },
};
</script>
