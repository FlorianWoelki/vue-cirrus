<template>
  <section class="headlines-component">
    <h5>Make it bigger</h5>
    <p>Create really huge headlines with this component.</p>

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
        style="margin-top: 30px;"
      >
        <v-headline uppercase h1>HEADLINE1</v-headline>
        <v-headline uppercase h2>HEADLINE2</v-headline>
        <v-headline uppercase h3>HEADLINE3</v-headline>
        <v-headline uppercase h4>HEADLINE4</v-headline>
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
      code: `<v-headline uppercase h1>HEADLINE1</v-headline>
<v-headline uppercase h2>HEADLINE2</v-headline>
<v-headline uppercase h3>HEADLINE3</v-headline>
<v-headline uppercase h4>HEADLINE4</v-headline>`,
      props: {
        uppercase: ['uppercase', 'false', 'Boolean', 'Make the headline uppercase'],
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
