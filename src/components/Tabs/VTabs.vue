<template>
  <div :class="[
    'tab-container',
    this.size ? `tabs-${this.size}` : null,
    this.mode ? `tabs-${this.mode}` : null,
    this.position ? `tabs-${this.position}` : null,
    {
      'dark': this.dark,
    },
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
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.tab-container.dark li a {
  color: white;
  background-color: #272727;
}
</style>
