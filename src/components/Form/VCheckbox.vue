<template>
  <div class="form-ext-control form-ext-checkbox">
    <input
      type="checkbox"
      :id="id"
      :class="classes"
      :checked="checked"
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
  },

  methods: {
    handleCheckboxChange(event) {
      this.$emit('change', event);
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
