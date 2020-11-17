<template>
  <div :class="[
    'pagination-item short',
    {
      selected: selected,
    },
  ]">
    <a
      v-bind="$attrs"
      v-on="$listeners"
      :disabled="disabled"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    selected: Boolean,
    disabled: Boolean,
  },
};
</script>
