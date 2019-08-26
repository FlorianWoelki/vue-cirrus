<template>
  <div :class=classes>
    <a
      :disabled=disabled
      :href=link
      @click="handleClick($event)"
      class="btn-link"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
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
