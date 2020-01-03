<template>
  <div :class="`form-ext-control form-ext-checkbox${dark ? ' dark' : ''}`">
    <input
      type="checkbox"
      :id="id"
      :class="[
        'form-ext-input',
        {
          'form-ext-input--success': this.success,
          'form-ext-input--error': this.error,
        },
      ]"
      :checked="checked"
      :disabled="disabled"
      @change="handleCheckboxChange"
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
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleCheckboxChange(event) {
      this.$emit('change', event);
    },
  },
};
</script>

<style>
.form-ext-control.form-ext-checkbox.dark label {
  color: white;
}

.form-ext-control.form-ext-checkbox.dark .form-ext-label:before {
  background: #404040;
  border-color: #404040;
}
</style>
