<template>
  <section class="spaces-component">
    <p class="no-upper-margin">
      Simply use the <kbd>v-space</kbd> component to create some extra
      space between your components on your website.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Spaces in their simplest form do has a height of 1rem.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Spaces/#!"
      component="v-space"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="u-center">
          <h6>Customize Me 1</h6>
          <v-space :large="propsData.large" :xlarge="propsData.xlarge"></v-space>
          <h6>Customize Me 2</h6>
        </div>
      </template>
      <v-row>
        <v-col class="u-center" c="6">
          <v-checkbox
            id="large-space"
            @change="() => { propsData.large = !propsData.large }"
          >Large</v-checkbox>
        </v-col>
        <v-col class="u-center" c="6">
          <v-checkbox
            @change="() => { propsData.xlarge = !propsData.xlarge }"
          >xLarge</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-space']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Large Space</h5>
    <p class="no-upper-margin">
      The large space is a bit larger than the normal one.
    </p>
    <LargeSpace />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import LargeSpace from './Examples/LargeSpace.vue';

export default {
  components: {
    API,
    Playground,
    LargeSpace,
  },

  data() {
    return {
      propsData: {
        large: false,
        xlarge: false,
      },
      props: [
        ['v-space', 'large', 'boolean', 'false', 'The size of the large space will be 1rem.'],
        ['v-space', 'xlarge', 'boolean', 'false', 'The size of the xlarge space will be 2rem.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<h6>Customize Me 1</h6>
<v-space${this.propsData.xlarge ? ' xlarge' : ''}${this.propsData.large ? ' large' : ''}></v-space>
<h6>Customize Me 2</h6>
`;
    },
  },
};
</script>
