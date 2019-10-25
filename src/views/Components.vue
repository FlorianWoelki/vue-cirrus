<template>
  <Sidebar>
    <h1 class="font-thin">Quick Start</h1>
    <p class="no-upper-margin">
      You can start really easily with vue-cirrus. Just follow
      the steps below to install Vue-Cirrus for your existing or
      new Vue project.
    </p>

    <v-space />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      To include Vue-Cirrus into your existing or new project, you must
      install its <kbd>npm package</kbd>. You can use either <kbd>npm</kbd>
      or <kbd>yarn</kbd> to accomplish this task.
    </p>
    <p class="no-upper-margin">
      For detailed explanation of how to get <kbd>npm</kbd> running in your
      environment, check out the <v-link href="https://docs.npmjs.com/" blank>official npm documentation</v-link>
      In addition, you can use <kbd>yarn</kbd> as an alternative to install
      Vue-Cirrus. You can find more information on the <v-link href="https://yarnpkg.com/lang/en/docs/" blank>official yarn documentation</v-link>.
      If you are good to go, you can run either command from the cli.
    </p>
    <v-code dark lang="Bash"><br />npm install vue-cirrus
// OR
yarn add vue-cirrus
    </v-code>

    <v-space />
    <p class="no-upper-margin">
      This additional step is optional, but if you want to use our official used
      fonts, you can simply include them in your <kbd>index.html</kbd> file of
      your vue project. <br />
      In addition we are adding the Cirrus UI to get some styling
      from Cirrus.
    </p>
    <v-code dark lang="HTML" copyable>
      <br />
      <xmp v-html="indexHtmlCode"></xmp>
    </v-code>

    <v-space />
    <p class="no-upper-margin">
      If you have done those steps, you can now include the Vue-Cirrus package
      in your <kbd>main.js</kbd> file. Just copy the code and import it easily.
    </p>
    <v-code dark lang="JavaScript" copyable><br />import 'vue-cirrus/dist/vue-cirrus.css';
import 'vue-cirrus';
    </v-code>

    <v-space />
    <h5 class="font-thin">Now you are ready to go! Keep hacking!</h5>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },

  data() {
    return {
      indexHtmlCode: `<link
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
/>`,
    };
  },
};
</script>

<style>
.no-upper-margin {
  margin-top: 5px;
}
</style>
