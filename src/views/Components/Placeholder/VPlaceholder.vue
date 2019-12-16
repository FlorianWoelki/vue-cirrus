<template>
  <section class="frames-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-placeholder</kbd> component to create
      simple, but powerful placeholders.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The simplest placeholder has a standard title, subtitle and no icon.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Placeholder/#!"
      component="v-placeholder"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-placeholder :title="propsData.title" :subtitle="propsData.subtitle">
        </v-placeholder>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-input-field
            placeholder="Title ..."
            v-model="propsData.title"
          ></v-input-field>
        </v-col>
        <v-col c="6" class="u-center">
          <v-input-field
            placeholder="Subtitle ..."
            v-model="propsData.subtitle"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-placeholder']" />

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
        title: 'Coming Soon',
        subtitle: 'We are currently working on this segment! :)',
      },
      props: [
        ['v-placeholder', 'title', 'string', 'Coming Soon', 'Set the title of the placeholder.'],
        ['v-placeholder', 'subtitle', 'string', 'We are currently working on this segment! :)', 'Set the subtitle of the placeholder.'],
      ],
    };
  },
};
</script>
