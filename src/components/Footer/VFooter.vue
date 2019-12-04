<template>
  <footer :class="fixed ? 'footer-fixed' : null">
    <h6
      v-if="title != ''"
      class="white uppercase"
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
    fixed: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
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
