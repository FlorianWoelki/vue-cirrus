<template>
  <li
    role="menu-item"
  >
    <a
      :href="href"
      @click="$emit('click', $event)"
      :target="blank ? '_blank' : ''"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    blank: Boolean,
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
