<template>
  <footer :class="fixed ? 'footer--fixed' : null">
    <h6
      v-if="title != ''"
      class="uppercase footer__title"
    >{{title}}</h6>
    <slot></slot>
    <p
      v-if="subtitle != ''"
      class="subtitle"
    >{{subtitle}}</p>
  </footer>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    title: String,
    subtitle: String,
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
