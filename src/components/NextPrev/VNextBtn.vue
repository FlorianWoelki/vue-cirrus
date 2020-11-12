<template>
  <li class="pagination-item pagination-next">
    <a
      :href="href"
      class="u-block"
      @click="$emit('click', $event)"
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
    href: {
      type: String,
      default: '!#',
    },
  },
};
</script>
