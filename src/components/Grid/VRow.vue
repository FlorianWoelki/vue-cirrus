<template>
  <div :class="[
    'row',
    {
      'row--no-wrap': this.noWrap,
      'level': this.level,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noWrap: {
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
