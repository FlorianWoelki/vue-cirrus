<template>
  <div
    class="tile"
    :style="enableBoxShadow ? 'box-shadow: 0 3px 6px rgba(0,0,0,0.06)' +
      ', 0 3px 6px rgba(0,0,0,0.03); padding: 1rem 2rem' : null"
  >
    <div class="tile__icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    enableBoxShadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
