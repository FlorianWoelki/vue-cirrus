<template>
  <div class="form-ext-control form-ext-radio">
    <input :id="id" :class="classes" :name="name" type="radio">
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
      default: 'my-radio-btn',
    },
    name: {
      type: String,
      default: 'radio-btn',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
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
  },

  computed: {
    classes() {
      return {
        'form-ext-input': true,
        'form-ext-input--success': this.success,
        'form-ext-input--error': this.error,
      };
    },
  },
};
</script>
