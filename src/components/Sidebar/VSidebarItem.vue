<template>
  <div v-if="!dropdown" :class=classes>
    <label :for=forId class="tree-item-header">
      <slot></slot>
    </label>
  </div>
  <div v-else>
    <li class="menu-item">
      <a :href=link>
        <slot></slot>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
    forId: {
      type: String,
      default: 'treeitem',
    },
    dropdown: {
      type: Boolean,
      default: false,
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
