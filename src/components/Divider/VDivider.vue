<template>
  <div v-if="vertical" :style="{ position: 'relative', height: '300px' }">
    <div
      :class="[
        {
          'divider-short': short,
          'divider--v': vertical,
        },
      ]"
      :style="{ height: '100%' }"
      :data-content="content"
    ></div>
  </div>
  <div v-else :class="[
    'divider',
    {
      'divider-short': short,
      'divider--v': vertical,
    },
  ]"></div>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.divider-short {
  max-width: 15rem;
  width: 100%;
}
</style>
