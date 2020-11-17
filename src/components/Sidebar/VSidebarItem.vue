<template>
  <div
    v-if="!dropdown"
    :class="[
      'tree-item',
      {
        'hover-effect': $parent.hoverEffect,
        'selected': selected,
      },
    ]"
  >
    <a
      v-bind="$attrs"
      v-on="$listeners"
      class="sidebar-link"
    >
      <label class="tree-item-header">
        <slot></slot>
      </label>
    </a>
  </div>
  <div v-else>
    <li :class="[
      'menu-item',
      {
        'selected': selected,
      },
    ]">
      <a v-bind="$attrs" v-on="$listeners">
        <slot></slot>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    dropdown: Boolean,
    selected: Boolean,
  },
};
</script>

<style>
.tree-item.selected label {
  color: #fff;
  background-color: #f03d4d;
}
</style>
