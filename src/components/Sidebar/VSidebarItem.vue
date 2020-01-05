<template>
  <div
    v-if="!dropdown"
    :class="[
      'tree-item',
      {
        'hover-effect': this.$parent.hoverEffect,
        'selected': this.selected,
      },
    ]"
  >
    <a
      class="sidebar-link"
      :href="href"
      @click="handleClick"
    >
      <label
        :for="forId"
        class="tree-item-header"
      >
        <slot></slot>
      </label>
    </a>
  </div>
  <div v-else>
    <li :class="[
      'menu-item',
      {
        'selected': this.selected,
      },
    ]">
      <a
        :href="href"
        @click="handleClick"
      >
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
    selected: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style>
.tree-item.selected label {
  color: #fff;
  background-color: #f03d4d;
}
.dark .tree-item.selected label {
  background-color: #272727;
}
</style>
