<template>
  <li class="pagination-item pagination-prev">
    <a
      :href="href"
      class="u-block"
      @click="$emit('click', $event)"
    >
      <p class="pagination-item-subtitle">{{ prevText }}</p>
      <h5 class="m-0">
        <slot />
      </h5>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    prevText: {
      type: String,
      default: 'Prev',
    },
    href: {
      type: String,
      default: '!#',
    },
  },
};
</script>
