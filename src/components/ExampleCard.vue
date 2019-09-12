<template>
  <v-card equalHeight>
    <v-card-image :image="`backgroundImage: url(${image})`">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        <v-tag-container>
          <v-tag info v-for="tag in getTagsAsString" :key="tag">{{ tag }}</v-tag>
        </v-tag-container>
      </v-card-subtitle>
    </v-card-image>

    <v-card-content>
      <p>{{ description }}</p>
    </v-card-content>

    <v-card-actions>
      <v-row center>
        <v-btn primary :href="href" blank>Preview</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitleTags: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  computed: {
    getTagsAsString() {
      const tags = [];
      this.subtitleTags.split(',').forEach((str) => {
        tags.push(str);
      });

      return tags;
    },
  },
};
</script>
