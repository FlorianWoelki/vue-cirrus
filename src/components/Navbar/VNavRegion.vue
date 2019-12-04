<template>
  <div :class="[
    this.position ? `nav-${this.position}` : null,
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: null,
    },
  },
};
</script>
