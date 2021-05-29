<template>
  <div class="form-ext-control form-ext-checkbox">
    <input
      v-bind="$attrs"
      type="checkbox"
      :id="id"
      :checked="checked"
      :class="['form-ext-input', color ? `form-ext-input--${color}` : '']"
    />
    <label :for="id" class="form-ext-label">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: 'input-checkbox',
    },
    color: String,
    checked: Boolean,
  },
});
</script>
