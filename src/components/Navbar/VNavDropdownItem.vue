<template>
  <li
    role="menu-item"
  >
    <a
      :href="href"
      @click="handleClick($event)"
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

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
