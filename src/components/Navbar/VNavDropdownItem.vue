<template>
  <li
    role="menu-item"
  >
    <a
      :href="href"
      :target="blank ? '_blank' : ''"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    blank: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
