<template>
  <span>
    <div
      id="sidebar"
      class="tree-nav"
      style="background: #f7f7f7;"
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

<style>
#sidebar {
  border-right: 1px solid rgb(220, 220, 220);
}

#sidebar .content {
  margin: 0 0.4em 1.5em;
}
</style>
