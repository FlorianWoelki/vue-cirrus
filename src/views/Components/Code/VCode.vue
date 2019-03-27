<template>
  <section class="code-component">
    <h5>Easy Code components</h5>
    <p>You can create easily colored code preview components!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        c4
        o1
      >
        <v-code
          lang="JavaScript"
        >const myBool = true;
if (myBool) {
  console.log("Bool is true!");
}</v-code>
      </v-col>
    </v-row>

    <v-space xlarge />

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="darkCode"></span>
        </v-code>
      </v-col>
      <v-col
        c4
        o1
      >
        <v-code lang="JavaScript" dark>const myBool = true;
if (myBool) {
  console.log("Bool is true!");
}</v-code>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space
      xlarge
      v-for="i in 2"
      :key=i
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
      code: `<xmp><v-code lang="JavaScript">const myBool = true;
if (myBool) {
  console.log("Bool is true!");
}</v-code></xmp>`,
      darkCode: `<xmp><v-code
  lang="JavaScript"
  dark
>const myBool = true;
if (myBool) {
  console.log("Bool is true!");
}</v-code></xmp>`,
      props: {
        lang: ['lang', 'empty', 'String', 'Language for this code segment (Supported languages: html, javascript, css)'],
        copyable: ['copyable', 'false', 'Boolean', 'If code segment is copyable'],
        dark: ['dark', 'false', 'Boolean', 'Dark mode for code component'],
      },
    };
  },
};
</script>
