<template>
  <div :class=classes>
    <a :disabled=disabled :href=link class="btn-link">
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
