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
      <div ref="navBtn" class="nav-item nav-btn" @click="toggleNavbarBtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div ref="headerMenu" class="header-nav">
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

  methods: {
    toggleNavbarBtn() {
      const { headerMenu, navBtn } = this.$refs;
      navBtn.classList.toggle('active');
      headerMenu.classList.toggle('active');
      this.$emit('open-mobile');
    },
  },
};
</script>
