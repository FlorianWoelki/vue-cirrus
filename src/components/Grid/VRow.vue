<template>
  <div :class="[
    'row',
    {
      'row--no-wrap': noWrap,
      'level': level,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noWrap: Boolean,
    level: Boolean,
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
