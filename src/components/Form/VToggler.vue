<template>
  <div class="form-ext-control">
    <label class="form-ext-toggle__label">
      <span><slot /></span>
      <div :class="classes">
        <input
          :name="name"
          type="checkbox"
          class="form-ext-input"
          :checked="checked"
          :disabled="disabled"
          @change="handleToggleChange"
        >
        <div class="form-ext-toggle__toggler">
          <i :data-check-icon="dataCheckIcon" :data-uncheck-icon="dataUncheckIcon"></i>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    dataCheckIcon: {
      type: String,
      default: '',
    },
    dataUncheckIcon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'toggleCheckbox',
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

  methods: {
    handleToggleChange(event) {
      this.$emit('change', event);
    },
  },

  computed: {
    classes() {
      return {
        'form-ext-toggle': true,
        'form-ext-toggle--success': this.success,
        'form-ext-toggle--error': this.error,
      };
    },
  },
};
</script>
