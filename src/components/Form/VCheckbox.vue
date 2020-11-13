<template>
  <div class="form-ext-control form-ext-checkbox">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      type="checkbox"
      :id="id"
      :checked="checked"
      :class="[
        'form-ext-input',
        this.color ? `form-ext-input--${this.color}` : '',
      ]"
    >
    <label :for="id" class="form-ext-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'input-checkbox',
    },
    color: String,
    checked: Boolean,
  },
};
</script>
