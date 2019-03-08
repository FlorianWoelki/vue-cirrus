<template>
  <div :class=classes>
    <div class="tree-nav-header">
      <a href="#sidebar" class="hide-desktop">
        <span class="icon">
          <p>Sidebar</p>
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
</style>
