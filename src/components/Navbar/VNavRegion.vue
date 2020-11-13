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
    position: String,
  },
};
</script>
