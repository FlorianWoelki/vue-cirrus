<template>
  <li class="pagination-item pagination-next">
    <a
      :href="href"
      class="display-block"
      @click="handleClick($event)"
    >
      <p class="pagination-item-subtitle">{{ nextText }}</p>
      <h5 class="light no-margin">
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
