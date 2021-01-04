<template>
  <section class="code-component">
    <p class="no-upper-margin">
      With the <kbd>v-code</kbd> component, you can easily create code inside your
      pages. It allows you to display code on your websites.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Buttons in their simplest form contain uppercase text
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Code/#!"
      component="v-code"
      :customCode="customCode"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-code lang="JavaScript" value="const cutomizeMe = 'Hello World';"></v-code>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-code']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Languages</h5>
    <p class="no-upper-margin">
      The <kbd>v-code</kbd> component supports different code languages.
    </p>
    <CodeLanguages />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import CodeLanguages from '@/views/Components/Code/Examples/CodeLanguages.vue';

export default {
  components: {
    API,
    Playground,
    CodeLanguages,
  },

  data() {
    return {
      propsData: {
        lang: 'JavaScript',
      },
      props: [
        ['v-code', 'lang', 'string', 'empty', 'Language for this code segment (Supported languages: html, javascript, css, bash, vue)'],
        ['v-code', 'dark', 'boolean', 'false', 'Enables the dark mode for this code component.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `<v-code lang="JavaScript">
const customizeMe = "Hello World";
</v-code>`;
    },
  },
};
</script>
