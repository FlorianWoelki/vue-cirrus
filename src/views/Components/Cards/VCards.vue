<template>
  <section class="cards-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-card</kbd> component to display beautiful designed and
      animated cards for your website.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The simplest card is a card with a title, content and a simple footer.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Cards/#!"
      component="v-card"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-card style="max-width: 250px">
          <v-container class="u-text-center pt-3">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" className="svg-inline--fa fa-bolt fa-w-10 fa-wrapper text-blue-600 bg-blue-100 p-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="border-radius: 100%; height: 4.75rem; width: 4.75rem;">
              <!-- eslint-disable-next-line -->
              <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
            </svg>
            <v-card-title>
              <p>{{ propsData.title }}</p>
            </v-card-title>
            <p>{{ propsData.content }}</p>
          </v-container>
        </v-card>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Title ..."
            v-model="propsData.title"
          ></v-input-field>
        </v-col>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Content ..."
            v-model="propsData.content"
          ></v-input-field>
        </v-col>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Footer ..."
            v-model="propsData.footer"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-card', 'v-card-image']" />

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
        title: 'Awesome Card Title',
        content: 'Some basic content',
        footer: '6:32 PM - 3 Jul 19',
      },
      props: [
        ['v-card', 'animated', 'boolean', 'false', 'Set the card to a animated one.'],
        ['v-card', 'equalHeight', 'boolean', 'false', 'For multiple cards set the height to the same one.'],
        ['v-card-image', 'image', 'string', 'empty', 'Set the source for the card image.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `<v-card style="max-width: 250px">
  <v-container class="u-text-center pt-3">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" className="svg-inline--fa fa-bolt fa-w-10 fa-wrapper text-blue-600 bg-blue-100 p-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="border-radius: 100%; height: 4.75rem; width: 4.75rem;">
      <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
    </svg>
    <v-card-title>
      <p>${this.propsData.title}</p>
    </v-card-title>
    <p>${this.propsData.content}</p>
  </v-container>
</v-card>
`;
    },
  },
};
</script>
