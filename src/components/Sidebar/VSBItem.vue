<template>
  <div :class=classes>
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

  computed: {
    classes() {
      return {
        'hover-effect': this.$parent.hoverEffect,
        'tree-item': true,
      };
    },
  },
};
</script>

<style>
#sidebar .hover-effect.tree-item:hover {
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  background-color: #efefef;
  border-radius: 5px;
}
</style>
