<template>
  <v-card equalHeight>
    <v-card-image :image="`backgroundImage: url(${image})`">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    </v-card-image>

    <v-card-content>
      <p>{{ description }}</p>
    </v-card-content>

    <v-card-actions>
      <v-row center>
        <v-btn primary>Preview</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
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
