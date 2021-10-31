<template>
  <div class="tile__container">
    <p v-if="title" class="m-0 tile__title">{{ title }}</p>
    <p v-if="subtitle" class="m-0 tile__subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    subtitle: String,
  },
});
</script>
