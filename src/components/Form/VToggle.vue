<template>
  <div class="form-ext-control">
    <label class="form-ext-toggle__label">
      <span><slot /></span>
      <div :class="[
        'form-ext-toggle',
        color ? `form-ext-toggle--${color}` : '',
      ]">
        <input
          v-bind="$attrs"
          v-on="$listeners"
          :name="name"
          type="checkbox"
          class="form-ext-input"
          :checked="checked"
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
  inheritAttrs: false,
  props: {
    dataCheckIcon: String,
    dataUncheckIcon: String,
    name: {
      type: String,
      default: 'toggleCheckbox',
    },
    checked: Boolean,
    color: String,
  },
};
</script>
