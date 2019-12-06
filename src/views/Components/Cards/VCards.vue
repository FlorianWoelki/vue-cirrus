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
        <v-card>
          <v-card-title>{{ propsData.title }}</v-card-title>
          <v-card-content>
            <v-space></v-space>
            <v-avatar text="FW"></v-avatar>
            <p>{{ propsData.content }}</p>
            <a href="#">#vue-cirrus</a>
            <a href="#">#cirrus</a>
          </v-card-content>

          <v-card-footer>{{ propsData.footer }}</v-card-footer>
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
        ['v-card-image', 'height', 'string', '332px', 'Set the height of the image in the card.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-card>
  <v-card-title>${this.propsData.title}</v-card-title>
  <v-card-content>
    <v-space></v-space>
    <v-avatar text="FW"></v-avatar>
    <p>${this.propsData.content}</p>
    <a href="#">#vue-cirrus</a>
    <a href="#">#cirrus</a>
  </v-card-content>

  <v-card-footer>${this.propsData.footer}</v-card-footer>
</v-card>
`;
    },
  },
};
</script>
