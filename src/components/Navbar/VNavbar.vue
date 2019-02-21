<template>
  <div class="header">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <a>
          <h6 class="title">{{title}}</h6>
        </a>
      </div>
    </div>
    <div class="header-nav" id="header-menu">
      <slot></slot>
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
