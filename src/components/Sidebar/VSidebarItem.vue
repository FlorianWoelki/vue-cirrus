<template>
  <div
    v-if="!dropdown"
    :class=classes
  >
    <a
      class="sidebar-link"
      :href=href
    >
      <label
        :for=forId
        class="tree-item-header"
      >
        <slot></slot>
      </label>
    </a>
  </div>
  <div v-else>
    <li class="menu-item">
      <a :href=href>
        <slot></slot>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    href: {
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
#sidebar .sidebar-link {
  backface-visibility: initial;
  text-decoration: initial;
  transition: none;
  color: initial;
  padding: 0;
  font-weight: 600;
  font-size: .95rem;
  color: #374054;
}
</style>
