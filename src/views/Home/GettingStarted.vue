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
      <v-col c6>
        <h5>Step 1</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          Install the Vue Cirrus dependency with yarn or npm.
        </h6>
      </v-col>
      <v-col c6>
        <v-code lang="Bash" copyable><br />npm install --save vue-cirrus</v-code>
      </v-col>
    </v-row>

    <v-row level>
      <v-col c6>
        <h5>Step 2</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          In your index.html in your Vue project insert the following.
        </h6>
      </v-col>
      <v-col c6>
        <v-code lang="HTML" copyable>
          <br />
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
          /></v-code>
      </v-col>
    </v-row>

    <v-row level>
      <v-col c6>
        <h5>Step 3</h5>
        <v-divider short />
        <h6 class="font-alt font-normal">
          Import Vue Cirrus in your main.js file.
        </h6>
      </v-col>
      <v-col c6>
        <v-code lang="JavaScript" copyable><br />import 'vue-cirrus/dist/vue-cirrus.css';
import 'vue-cirrus';</v-code>
      </v-col>
    </v-row>
  </section>
</template>
