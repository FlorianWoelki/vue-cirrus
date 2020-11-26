<template>
  <div :class="[
    c ? `col-${c}` : null,
    o ? `offset-${o}` : null,
    dynamicOffset ? `offset-${dynamicOffset}` : null,
    w ? `w-${w}` : null,
    h ? `h-${h}` : null,
    {
      'col': fluid,
      'ignore-screen': ignoreScreen,
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
