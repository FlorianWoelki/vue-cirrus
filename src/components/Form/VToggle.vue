<template>
  <div class="form-ext-control">
    <label class="form-ext-toggle__label">
      <span><slot /></span>
      <div
        :class="['form-ext-toggle', color ? `form-ext-toggle--${color}` : '']"
      >
        <input
          v-bind="$attrs"
          :name="name"
          type="checkbox"
          class="form-ext-input"
          :checked="checked"
        />
        <div class="form-ext-toggle__toggler">
          <i
            :data-check-icon="dataCheckIcon"
            :data-uncheck-icon="dataUncheckIcon"
          ></i>
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
});
</script>
