<template>
  <div class="sidebar-dropdown">
    <input type="checkbox" id="mixins" class="hide" name="mixinsTree">
    <label for="mixins" class="tree-item-header">
      {{title}}
    </label>
    <div class="tree-item-body">
      <ul class="menu">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.sidebar-dropdown label {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
