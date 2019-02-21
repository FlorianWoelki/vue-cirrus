<template>
  <div class="tree-item">
    <label :for=forId class="tree-item-header">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    forId: {
      type: String,
      default: 'treeitem',
    },
  },
};
</script>
