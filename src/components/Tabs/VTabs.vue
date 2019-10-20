<template>
  <div :class=classes>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    xsmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xlarge: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    depth: {
      type: Boolean,
      default: false,
    },
    classic: {
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
        'tab-container': true,
        'tabs-xsmall': this.xsmall,
        'tabs-small': this.small,
        'tabs-large': this.large,
        'tabs-xlarge': this.xlarge,
        'tabs-center': this.center,
        'tabs-right': this.right,
        'tabs-fill': this.fill,
        'tabs-depth': this.depth,
        'tabs-classic': this.classic,
        dark: this.dark,
      };
    },
  },
};
</script>

<style>
.tab-container.dark li a {
  color: white;
  background-color: #272727;
}
.tab-container.dark li a {}
</style>
