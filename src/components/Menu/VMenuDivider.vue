<template>
  <li class="divider" :data-label="label"></li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    label: String,
  },
});
</script>
