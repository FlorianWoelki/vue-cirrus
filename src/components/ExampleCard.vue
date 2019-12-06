<template>
  <v-card equalHeight>
    <v-card-image :image="`backgroundImage: url(${require('@/assets/' + image)})`">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        <v-tag-container>
          <v-tag color="info" v-for="tag in getTagsAsString" :key="tag">{{ tag }}</v-tag>
        </v-tag-container>
      </v-card-subtitle>
    </v-card-image>

    <v-card-content>
      <p>{{ description }}</p>
    </v-card-content>

    <v-card-actions>
      <v-row>
        <v-col c="6" class="u-center">
          <v-btn color="primary" :href="href" blank>
            <i class="fas fa-globe fa-lg"></i>
          </v-btn>
        </v-col>
        <v-col c="6" class="u-center">
          <v-btn color="link" :href="github" blank>
            <i class="fab fa-github fa-lg"></i>
          </v-btn>
        </v-col>
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
    github: {
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
