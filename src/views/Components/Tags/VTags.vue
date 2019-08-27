<template>
  <section class="headlines-component">
    <h5>Tags with beautiful colors</h5>
    <p>Tags can be simple and useful as well.</p>

    <v-row>
      <v-col c6>
        <v-code
          lang="Vue"
          :dark="isDarkMode"
        >
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-tag white large>White large</v-tag>
        <v-tag black>Black</v-tag>
        <v-tag primary xlarge>Primary xlarge</v-tag>
        <v-tag link>Link</v-tag>
        <v-tag info>Info</v-tag>
        <v-tag success>Success</v-tag>
        <v-tag warning>Warning</v-tag>
        <v-tag danger>Danger</v-tag>
      </v-col>
    </v-row>

    <v-space />

    <v-row>
      <v-col c6>
        <v-code
          lang="Vue"
          :dark="isDarkMode"
        >
          <xmp v-html="containerCode"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-row>
          <v-col center>
            <v-tag-container>
              <v-tag success>Can</v-tag>
              <v-tag warning>Be</v-tag>
              <v-tag danger>Containerized</v-tag>
            </v-tag-container>
          </v-col>
          <v-col center>
            <v-tag-container grouped>
              <v-tag black>Can</v-tag>
              <v-tag info>Be</v-tag>
              <v-tag link>Grouped</v-tag>
            </v-tag-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data="props" />

    <v-space
      xlarge
      v-for="i in 2"
      :key="i"
    />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      containerCode: `<v-tag-container>
  <v-tag success>Can</v-tag>
  <v-tag warning>Be</v-tag>
  <v-tag danger>Containerized</v-tag>
</v-tag-container>

<v-tag-container grouped>
  <v-tag black>Can</v-tag>
  <v-tag info>Be</v-tag>
  <v-tag link>Grouped</v-tag>
</v-tag-container>`,
      code: `<v-tag white large>White large</v-tag>
<v-tag black>Black</v-tag>
<v-tag primary xlarge>Primary xlarge</v-tag>
<v-tag link>Link</v-tag>
<v-tag info>Info</v-tag>
<v-tag success>Success</v-tag>
<v-tag warning>Warning</v-tag>
<v-tag danger>Danger</v-tag>`,
      props: {
        rounded: ['rounded', 'false', 'Boolean', 'Round the tag'],
        large: ['large', 'false', 'Boolean', 'Tag gets large'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Tag gets really large'],
        closable: ['closable', 'false', 'Boolean', 'Adds a close button for the tag'],
        deletable: ['deletable', 'false', 'Boolean', 'Make a delete tag'],
      },
    };
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode.darkMode;
    },
  },
};
</script>
