<template>
  <li class="pagination-item pagination-prev">
    <a
      :href="href"
      class="display-block"
      @click="handleClick($event)"
    >
      <p class="pagination-item-subtitle">{{ prevText }}</p>
      <h5 class="light no-margin">
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
      default: 'Next',
    },
    href: {
      type: String,
      default: '#!',
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
