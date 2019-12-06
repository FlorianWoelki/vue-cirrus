<template>
  <div :style="vertical ? { position: 'relative', height: '300px' } : null">
    <div
      :class="[
        {
          'divider': !vertical,
          'divider-short': short,
          'divider--v': vertical,
          'dark': dark,
        },
      ]"
      :style="vertical ? { height: '100%' } : null"
      :data-content="vertical ? content : null"
    ></div>
  </div>
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
