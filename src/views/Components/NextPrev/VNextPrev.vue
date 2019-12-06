<template>
  <section class="next-prev-component">
    <p class="no-upper-margin">
      To make really cool bottom navigation menus, you can use the
      <kbd>v-next-prev</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Pagination in their simples form have no border and a hover color.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/NextPrev/#!"
      component="v-next-prev"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-next-prev>
          <v-prev-btn :prevText="propsData.previousText">
            {{ propsData.previousTitle }}
          </v-prev-btn>
          <v-next-btn :nextText="propsData.nextText">
            {{ propsData.nextTitle }}
          </v-next-btn>
        </v-next-prev>
      </template>
      <v-row>
        <v-col class="u-center" c="3">
          <v-input-field
            placeholder="Previous Title ..."
            v-model="propsData.previousTitle"
          ></v-input-field>
        </v-col>
        <v-col class="u-center" c="3">
          <v-input-field
            placeholder="Previous Text ..."
            v-model="propsData.previousText"
          ></v-input-field>
        </v-col>
        <v-col class="u-center" c="3">
          <v-input-field
            placeholder="Next Title ..."
            v-model="propsData.nextTitle"
          ></v-input-field>
        </v-col>
        <v-col class="u-center" c="3">
          <v-input-field
            placeholder="Next Text ..."
            v-model="propsData.nextText"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-next-btn', 'v-prev-btn']" />

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
        previousTitle: 'Prev Title',
        previousText: 'Prev',
        nextTitle: 'Next Title',
        nextText: 'Next',
      },
      props: [
        ['v-next-btn', 'href', 'string', '#!', 'Set the href, when someone clicks the next button.'],
        ['v-next-btn', '@click', 'function', '() => {}', 'Get the event, when someone clicks the next button.'],
        ['v-prev-btn', 'href', 'string', '#!', 'Set the href, when someone clicks the previous button.'],
        ['v-prev-btn', '@click', 'function', '() => {}', 'Get the event, when someone clicks the previous button.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-next-prev>
  <v-prev-btn prevText="${this.propsData.previousText}">
    ${this.propsData.previousTitle}
  </v-prev-btn>
  <v-next-btn nextText="${this.propsData.nextText}">
    ${this.propsData.nextTitle}
  </v-next-btn>
</v-next-prev>
`;
    },
  },
};
</script>
