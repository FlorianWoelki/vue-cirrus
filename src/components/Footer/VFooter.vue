<template>
  <footer :class="['footer', fixed ? 'footer--fixed' : null]">
    <div class="footer__title">
      <slot name="title" />
    </div>

    <slot></slot>

    <div class="subtitle">
      <slot name="subtitle" />
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
  },
};
</script>

<style>
footer .divider {
  background: rgba(238, 238, 238, 0.2);
  height: 1px;
}
footer ul a {
  display: block;
}
footer ul a li:hover {
  color: #fff;
  transition: all .3s;
}
</style>
