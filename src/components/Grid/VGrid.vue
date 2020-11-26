<template>
  <div :class="[
    'grid',
    gap ? `grid-gap-${gap}` : null,
    cols ? `grid-cols-${cols}` : null
  ]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    gap: String,
    cols: String,
  },
};
</script>
