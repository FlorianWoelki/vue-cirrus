<template>
  <span v-if="!animated" class="subtitle">
    <slot />
  </span>
  <p v-else class="tile__subtitle">
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
