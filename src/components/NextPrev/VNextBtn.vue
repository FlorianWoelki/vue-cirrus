<template>
  <li class="pagination-item pagination-next">
    <a
      v-bind="$attrs"
      v-on="$listeners"
      class="u-block"
    >
      <p class="pagination-item-subtitle">{{ nextText }}</p>
      <h5 class="m-0">
        <slot />
      </h5>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    nextText: {
      type: String,
      default: 'Next',
    },
  },
};
</script>
