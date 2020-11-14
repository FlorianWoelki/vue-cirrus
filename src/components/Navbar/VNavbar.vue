<template>
  <div :class="[
    'header u-unselectable header-animated',
    {
      'header-fixed': fixed,
      'header-dark': dark,
      'header-clear': clear,
    },
  ]">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <slot name="brandTitle"></slot>
      </div>
      <div id="header-btn" class="nav-item nav-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="header-menu" class="header-nav">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    dark: Boolean,
    clear: Boolean,
  },
};
</script>
