<template>
  <div :class="[
    'row',
    {
      'fluid-container': this.fluid,
      'wrap': this.wrap,
      'level': this.level,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.level {
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>
