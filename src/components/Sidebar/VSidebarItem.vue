<template>
  <div
    v-if="!dropdown"
    :class=classes
  >
    <a
      class="sidebar-link"
      :href=href
      @click="handleClick"
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
      <a
        :href=href
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
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
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
