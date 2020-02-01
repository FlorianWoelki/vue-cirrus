<template>
  <div v-if="vertical" :style="{ position: 'relative', height: '300px' }">
    <div
      :class="[
        {
          'divider-short': short,
          'divider--v': vertical,
          'dark': dark,
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
      'dark': dark,
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
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.divider.dark {
  border-color: #272727;
}
.divider-short {
  max-width: 15rem;
  width: 100%;
}
</style>
