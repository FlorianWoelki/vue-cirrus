<template>
  <section id="getting-started">
    <div class="u-text-center">
      <h3 class="uppercase">Getting Started</h3>
      <h6 class="font-alt font-normal">
        Getting started with Vue Cirrus is really simple and straight forward.
      </h6>
    </div>

    <v-space />

    <v-row level>
      <v-col c="5">
        <h5>Step 1</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          Install the Vue Cirrus dependency with yarn or npm.
        </h6>
      </v-col>
      <v-col c="7">
        <v-code lang="Bash" copyable><br />npm install --save vue-cirrus</v-code>
      </v-col>
    </v-row>

    <v-space></v-space>

    <v-row level>
      <v-col c="5">
        <h5>Step 2</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          In your index.html in your Vue project insert the following.
        </h6>
      </v-col>
      <v-col c="7">
        <v-code lang="HTML" copyable>{{ htmlCode }}</v-code>
      </v-col>
    </v-row>

    <v-space large></v-space>

    <v-row level>
      <v-col c="5">
        <h5>Step 3</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          Import Vue Cirrus in your main.js file.
        </h6>
      </v-col>
      <v-col c="7">
        <v-code lang="JavaScript" copyable>{{ jsCode }}</v-code>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jsCode: `
import VueCirrus from 'vue-cirrus';
import 'vue-cirrus/dist/vue-cirrus.css';

Vue.use(VueCirrus);
`,
      htmlCode: `
<link
  href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
  rel="stylesheet"
>
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
>
<link
  href="https://unpkg.com/cirrus-ui"
  type="text/css"
  rel="stylesheet"
/>
`,
    };
  },
};
</script>
