<template>
  <li role="menu-item">
    <a v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>
