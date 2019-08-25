<template>
  <div :class=classes>
    <div class="tree-nav-header">
      <a
        href="#sidebar"
        class="hide-desktop"
      >
        <span class="icon">
          <div class="sidebar-icon-container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </span>
      </a>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  beforeCreate() {
    document.body.className = 'sidebar';
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'tree-nav-body': true,
        },
      );
    },
  },
};
</script>

<style>
body.sidebar {
  overflow-y: hidden;
}

.hide-desktop .icon {
  display: initial;
}

.sidebar-menu-container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
</style>
