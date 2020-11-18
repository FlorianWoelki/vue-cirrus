<template>
  <span :class="!animated ? 'subtitle' : 'tile__subtitle'">
    <slot />
  </span>
</template>

<script>
export default {
  inject: {
    animated: { default: false },
  },
};
</script>
