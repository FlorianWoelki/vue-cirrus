<template>
  <p :class="!animated ? 'subtitle' : 'tile__subtitle'">
    <slot />
  </p>
</template>

<script>
export default {
  inject: {
    animated: { default: false },
  },
};
</script>
