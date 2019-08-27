<template>
  <section id="getting-started">
    <h3>Getting Started</h3>
    <v-divider></v-divider>
    <v-row>
      <p>
        Getting started with Vue Cirrus is really simple. There will be more options on
        getting started with Vue Cirrus!
      </p>
    </v-row>
    <v-row>
      <v-col>
        <h6>Install with NPM</h6>
        <p>You can use npm to install Vue Cirrus</p>
        <v-code
          lang="Bash"
          copyable
          :dark="isDarkMode"
        >npm install --save vue-cirrus</v-code>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h6>Setting Up</h6>
        <p>
          Setting up Vue Cirrus for any project is very simple and will only
          require couple of lines.
        </p>
        <p>In your index.html file insert the following lines.</p>
        <v-code
          lang="HTML"
          copyable
          :dark="isDarkMode"
        >
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
            rel="stylesheet"
          > <br />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          > <br />
          <link
            href="https://unpkg.com/cirrus-ui"
            type="text/css"
            rel="stylesheet"
          />
        </v-code>
        <p>Import all Vue Cirrus components by importing it in your main.js file.</p>
        <v-code
          lang="JavaScript"
          copyable
          :dark="isDarkMode"
        >import 'vue-cirrus/dist/vue-cirrus.css';
  import 'vue-cirrus';</v-code>
        <p>
          That's it. I recommend that you look up some examples in the documentation.
          If you feel comfortable, you can start exploring the world of Vue Cirrus. :P
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode.darkMode;
    },
  },
};
</script>
