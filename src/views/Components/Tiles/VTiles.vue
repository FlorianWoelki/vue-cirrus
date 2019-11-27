<template>
  <section class="tile-component">
    <p class="no-upper-margin">
      With the <kbd>v-tile</kbd> component, you can create easy and minmizing
      cards for displaying the download progress or something else.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Tiles in their simples form have no shadow and just a icon, content and some buttons.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Tiles/#!"
      component="v-tile"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-tile :enableBoxShadow="propsData.enableBoxShadow">
          <v-tile-icon>
            <v-avatar text="FW"></v-avatar>
          </v-tile-icon>
          <v-tile-content
            :title="propsData.title"
            :subtitle="propsData.subtitle"
            :info="propsData.info"
          >
          </v-tile-content>
          <v-tile-buttons>
            <v-btn primary small>View</v-btn>
            <v-btn small>Dismiss</v-btn>
          </v-tile-buttons>
        </v-tile>
      </template>
      <v-row>
        <v-col c3 center>
          <v-input-field
            placeholder="Title ..."
            v-model="propsData.title"
          ></v-input-field>
        </v-col>
        <v-col c3 center>
          <v-input-field
            placeholder="Subtitle ..."
            v-model="propsData.subtitle"
          ></v-input-field>
        </v-col>
        <v-col c3 center>
          <v-input-field
            placeholder="Info ..."
            v-model="propsData.info"
          ></v-input-field>
        </v-col>
        <v-col c3 center>
          <v-checkbox
            @change="() => { propsData.enableBoxShadow = !propsData.enableBoxShadow }"
          >Box Shadow</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-tile', 'v-tile-content']" />

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
        title: 'Florian Woelki',
        subtitle: 'I love pizza and coffee',
        info: '10 seconds ago',
        enableBoxShadow: false,
      },
      props: [
        ['v-tile', 'enableBoxShadow', 'boolean', 'false', 'Enables the box shadow for a tile.'],
        ['v-tile-content', 'title', 'string', 'empty', 'Set the title text for the tile.'],
        ['v-tile-content', 'subtitle', 'string', 'empty', 'Set the subtitle text for the tile.'],
        ['v-tile-content', 'info', 'string', 'empty', 'Set the information text for the tile.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-tile${this.propsData.enableBoxShadow ? ' enableBoxShadow' : ''}>
  <v-avatar text="FW"></v-avatar>
  <v-tile-content
    title="${this.propsData.title}"
    subtitle="${this.propsData.subtitle}"
    info="${this.propsData.info}"
  >
  </v-tile-content>
  <v-tile-buttons>
    <v-btn primary small>View</v-btn>
    <v-btn small>Dismiss</v-btn>
  </v-tile-buttons>
</v-tile>
`;
    },
  },
};
</script>
