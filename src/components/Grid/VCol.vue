<template>
  <div :class="[
    this.c ? `col-${this.c}` : null,
    this.o ? `offset-${this.o}` : null,
    this.dynamicOffset ? `offset-${this.dynamicOffset}` : null,
    this.w ? `w-${this.w}` : null,
    this.h ? `h-${this.h}` : null,
    {
      'col': this.fluid,
      'ignore-screen': this.ignoreScreen,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    c: String,
    o: String,
    w: String,
    h: String,
    dynamicOffset: String,
    fluid: Boolean,
    ignoreScreen: Boolean,
  },
};
</script>
