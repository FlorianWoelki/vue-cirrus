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
        ['v-parallax', 'src', 'string', 'null', 'Set the source url for the parallax component.'],
        ['v-parallax', 'customBody', 'boolean', 'false', 'Deactivate the pre made body and create your own.'],
        ['v-parallax', 'fullscreen', 'boolean', 'false', 'Enable fullscreen height and width of your parallax element.'],
        ['v-parallax', 'disableParallax', 'boolean', 'false', 'Disable the parallax effect for this component.'],
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
