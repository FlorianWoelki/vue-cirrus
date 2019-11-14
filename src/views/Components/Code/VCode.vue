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
    >
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-code']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      props: [
        ['v-code', 'lang', 'string', 'empty', 'Language for this code segment (Supported languages: html, javascript, css, bash, vue)'],
        ['v-code', 'copyable', 'boolean', 'false', 'Adds a functionality to copy the code inside the code component.'],
        ['v-code', 'dark', 'boolean', 'false', 'Enables the dark mode for this code component.'],
      ],
    };
  },
};
</script>
