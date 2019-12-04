<template>
  <li
    :class="[
      'menu-item',
    ]"
  >
    <a :href="href" @click="$emit('click', $event)">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
  },
};
</script>
