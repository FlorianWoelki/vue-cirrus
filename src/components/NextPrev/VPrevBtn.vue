<template>
  <li class="pagination-item pagination-prev">
    <a
      v-bind="$attrs"
      v-on="$listeners"
      class="u-block"
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
  },
};
</script>
