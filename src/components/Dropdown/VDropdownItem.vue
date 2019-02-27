<template>
  <li class="menu-item">
    <a :href=link>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
