<template>
  <div :class="classes">
    <a
      :disabled="disabled"
      :href="href"
      @click="handleClick($event)"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },

  computed: {
    classes() {
      return {
        'pagination-item short': true,
        selected: this.selected,
      };
    },
  },
};
</script>
