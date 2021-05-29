<template>
  <input type="color" :value="defaultValue">
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    defaultValue: {
      type: String,
      default: '#000',
    },
  },
});
</script>
