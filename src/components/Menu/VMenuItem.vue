<template>
  <li :class="[
    'menu-item',
    {
      'selected': this.selected,
    },
  ]">
    <div class="menu-addon">
      <slot name="addon"></slot>
    </div>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    selected: Boolean,
  },
};
</script>
