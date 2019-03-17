<template>
  <div class="form-group">
    <input
      type="search"
      class="form-group-input"
      :placeholder=inputPlaceholder
      @input="$emit('input', $event.target.value)"
    >
    <button
      class="form-group-btn"
      @click=searchAction
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    inputPlaceholder: {
      type: String,
      default: 'Search',
    },
    searchAction: {
      type: Function,
      default: () => 1,
    },
  },
};
</script>
