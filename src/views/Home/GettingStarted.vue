<template>
  <section id="getting-started">
    <h3>Getting Started</h3>
    <div class="divider"></div>
    <v-row>
      <p>
        Getting started with Vue Cirrus is really simple. There will be more options on
        getting started with Vue Cirrus!
      </p>
    </v-row>
    <v-row>
      <h6>Install with NPM</h6>
      <p>You can use npm to install Vue Cirrus</p>
      <v-code
        lang="Console"
        copyable
      >npm install --save vue-cirrus</v-code>
    </v-row>
    <v-row>
      <h6>Setting Up</h6>
      <p>
        Setting up Vue Cirrus for any project is very simple and will only require couple of lines.
      </p>
      <p>In your index.html file insert the following lines.</p>
      <v-code
        lang="HTML"
        copyable
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
      >import 'vue-cirrus/dist/vue-cirrus.css';
import 'vue-cirrus';</v-code>
      <p>That's it. You can now start exploring!</p>
    </v-row>
  </section>
</template>
