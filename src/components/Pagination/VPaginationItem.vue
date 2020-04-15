<template>
  <div :class="[
    'pagination-item short',
    {
      selected: this.selected,
    },
  ]">
    <a
      :disabled="disabled"
      :href="href"
      @click="$emit('click', $event)"
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
};
</script>
