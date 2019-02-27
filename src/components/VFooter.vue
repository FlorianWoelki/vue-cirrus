<template>
  <footer :class=classes>
    <h6 v-if="title != ''" class="white uppercase">{{title}}</h6>
    <slot></slot>
    <p v-if="subtitle != ''" class="subtitle">{{subtitle}}</p>
  </footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return {
        'footer-fixed': this.fixed,
      };
    },
  },
};
</script>
