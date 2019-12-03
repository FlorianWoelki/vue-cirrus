<template>
  <div :class="[
    'tab-container',
    `tabs-${this.size}`,
    `tabs-${this.mode}`,
    `tabs-${this.position}`,
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
