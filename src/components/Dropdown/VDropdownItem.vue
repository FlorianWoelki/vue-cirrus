<template>
  <li class="menu-item">
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>
