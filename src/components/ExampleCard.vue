<template>
  <div class="card h-100 u-flex u-flex-column">
    <div class="card-container">
      <div class="card-image" :style="'background-image: url(' + image + ')'"></div>
      <div class="title-container">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="content">
      <p>{{ description }}</p>
    </div>
    <div class="action-bar">
      <v-row center>
        <v-btn primary>Preview</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
