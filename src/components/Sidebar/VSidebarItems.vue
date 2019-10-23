<template>
  <span>
    <div
      id="sidebar"
      class="tree-nav"
    >
      <div class="content">
        <h6>{{ title }}</h6>
      </div>
      <div class="tree-nav-container">
        <div class="tree">
          <slot></slot>
        </div>
      </div>
    </div>
    <a
      href="#sidebar-close"
      id="sidebar-close"
      class="tree-nav-close"
    ></a>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    hoverEffect: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
