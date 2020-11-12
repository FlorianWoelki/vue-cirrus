<template>
  <div :class="[
    'tab-container',
    this.size ? `tabs-${this.size}` : null,
    this.mode ? `tabs-${this.mode}` : null,
    this.position ? `tabs-${this.position}` : null,
  ]">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: null,
    },
    mode: {
      type: String,
      default: null,
    },
  },
};
</script>
