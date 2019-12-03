<template>
  <div
    :class="[
      'tile',
      'tile--center',
      {
        'dark': this.dark,
      },
    ]"
    :style="enableBoxShadow ? 'box-shadow: 0 3px 6px rgba(0,0,0,0.06)' +
      ', 0 3px 6px rgba(0,0,0,0.03); padding: 0.25rem 1rem' : null"
  >
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
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.tile.tile--center.dark {
  background-color: #272727;
}
.tile.tile--center.dark .tile__container {
  color: white;
}
</style>
