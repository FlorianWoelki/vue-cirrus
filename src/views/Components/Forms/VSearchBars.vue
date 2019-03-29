<template>
  <section class="search-bars-component">
    <h5>Search Bars</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 30px;"
      >
        <v-container>
          <v-search-bar
            v-model=searchingWord
            :searchAction=click
          >Search Me!</v-search-bar>
          <p>Searching for word:
            <span v-if="searchingWord !== ''">{{searchingWord}}</span>
            <span v-else>...</span>
          </p>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchingWord: '',
      code: `<v-search-bar
  v-model=searchingWord
  :searchAction=click
>Search Me!</v-search-bar>`,
    };
  },
  methods: {
    click() {
      alert(`You searched the word "${this.searchingWord}"`); // eslint-disable-line
    },
  },
};
</script>
