<template>
  <v-card equalHeight>
    <v-card-image :image="require('@/assets/' + image)">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        <v-tag-container>
          <v-tag color="info" v-for="tag in getTagsAsString" :key="tag">{{ tag }}</v-tag>
        </v-tag-container>
      </v-card-subtitle>
    </v-card-image>

    <v-container class="mb-0">
      <p>{{ description }}</p>
    </v-container>

    <v-card-actions>
      <v-row>
        <v-col c="6" class="u-center">
          <a :href="href" target="_blank" class="white">
            <v-btn color="primary">
                <i class="fas fa-globe fa-lg"></i>
            </v-btn>
          </a>
        </v-col>
        <v-col c="6" class="u-center">
          <a :href="github" target="_blank">
            <v-btn color="link">
              <i class="fab fa-github fa-lg"></i>
            </v-btn>
          </a>
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
