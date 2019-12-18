<template>
  <section class="parallax-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-parallax</kbd> component to display parallax or fullscreen
      images really easily.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Parallax components have a pre made body, that you can disable.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Parallax/#!"
      component="v-parallax"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          :disableParallax="propsData.disableParallax"
          :customBody="propsData.customBody"
        >
          <h1 class="white">Parallax image</h1>
        </v-parallax>
      </template>
      <v-row>
        <v-col class="u-center" c="6">
          <v-checkbox
            @change="() => { propsData.customBody = !propsData.customBody }"
          >Custom Body</v-checkbox>
        </v-col>
        <v-col class="u-center" c="6">
          <v-checkbox
            id="disable-parallax"
            @change="() => { propsData.disableParallax = !propsData.disableParallax }"
          >Disable Parallax</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-parallax']" />

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
      propsData: {
        disableParallax: false,
        customBody: false,
      },
      props: [
        ['v-pagination', 'bordered', 'boolean', 'false', 'Activate the border around the pagination.'],
        ['v-pagination-item', 'selected', 'boolean', 'false', 'Set the pagination item in a selected red state.'],
        ['v-pagination-item', 'disabled', 'boolean', 'false', 'Set the pagination item in a disabled state.'],
        ['v-pagination-item', 'href', 'string', '#', 'Set the href, when someone clicks the pagination item.'],
        ['v-pagination-item', '@click', 'function', '() => {}', 'Get the event, when someone clicks the pagination item.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-parallax
  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"${this.propsData.disableParallax ? '\n  disableParallax' : ''}${this.propsData.customBody ? '\n  customBody' : ''}
>
  <h1 class="white">Parallax image</h1>
</v-parallax>
`;
    },
  },
};
</script>
