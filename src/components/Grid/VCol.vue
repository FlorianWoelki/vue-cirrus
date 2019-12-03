<template>
  <div :class="[
    'offset-center',
    this.c ? `col-${this.c}` : null,
    this.o ? `offset-${this.o}` : null,
    this.dynamicOffset ? `offset-${this.dynamicOffset}` : null,
    this.w ? `w-${this.w}` : null,
    this.h ? `h-${this.h}` : null,
    {
      'col': this.fluid,
      'no-space': this.noSpace,
      'ignore-screen': this.ignoreScreen,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    c: {
      type: String,
      default: null,
    },
    o: {
      type: String,
      default: null,
    },
    w: {
      type: String,
      default: null,
    },
    h: {
      type: String,
      default: null,
    },
    dynamicOffset: {
      type: String,
      default: null,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    noSpace: {
      type: Boolean,
      default: false,
    },
    ignoreScreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
