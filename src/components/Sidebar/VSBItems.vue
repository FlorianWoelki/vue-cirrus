<template>
  <div id="sidebar" class="tree-nav" style="background: #f7f7f7;">
    <div class="content">
      <h6>{{title}}</h6>
    </div>
    <div class="tree-nav-container">
      <div class="tree">
        <slot></slot>
      </div>
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
#sidebar .content {
  margin: 0 0.4em 1.5em;
}
</style>
