<template>
  <div class="form-ext-control form-ext-radio">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      :id="id"
      :class="[
        'form-ext-input',
        color ? `form-ext-input--${color}` : '',
      ]"
      :checked="checked"
      :name="name"
      type="radio"
    >
    <label :for="id" class="form-ext-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: 'my-radio-btn',
    },
    name: {
      type: String,
      default: 'radio-btn',
    },
    checked: Boolean,
    color: String,
  },
};
</script>
