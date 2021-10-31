<template>
  <div v-if="vertical" :style="{ position: 'relative', height: '300px' }">
    <div
      :class="[
        {
          'divider-short': short,
          'divider--v': vertical
        }
      ]"
      :style="{ height: '100%' }"
      :data-content="content"
    ></div>
  </div>
  <div
    v-else
    :class="[
      'divider',
      {
        'divider-short': short,
        'divider--v': vertical
      }
    ]"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    short: Boolean,
    vertical: Boolean,
    content: String,
  },
});
</script>

<style>
.divider-short {
  max-width: 15rem;
  width: 100%;
}
</style>
