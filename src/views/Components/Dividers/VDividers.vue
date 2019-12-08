<template>
  <section class="divider-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-divider</kbd> component to seperate content from other content.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Default dividers are horizontal and long.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Dividers/#!"
      component="v-divider"
      :componentProps="propsData"
      disableMessage
    >
      <template v-slot:component>
        <v-divider
          :short="propsData.short"
          :vertical="propsData.vertical"
          :content="propsData.content"
        ></v-divider>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-checkbox
            @change="() => { propsData.short = !propsData.short }"
          >Short</v-checkbox>
        </v-col>
        <v-col c="4" class="u-center">
          <v-checkbox
            id="vertical-divider"
            @change="() => { propsData.vertical = !propsData.vertical }"
          >Vertical</v-checkbox>
        </v-col>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Vertical Content ..."
            v-model="propsData.content"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-divider']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Vertical</h5>
    <p class="no-upper-margin">
      With the <kbd>vertical</kbd> and <kbd>content</kbd> property you can easily
      set up a vertical aligned divider with content in the center of the divider.
    </p>
    <VerticalDivider />
  </section>
</template>

<script>
import API from '../API.vue';
import Playground from '@/components/Playground/Playground.vue';
import VerticalDivider from '@/views/Components/Dividers/Examples/VerticalDivider.vue';

export default {
  components: {
    API,
    Playground,
    VerticalDivider,
  },

  data() {
    return {
      propsData: {
        short: false,
        vertical: false,
        content: '',
      },
      props: [
        ['v-divider', 'short', 'boolean', 'false', 'Set the divider size to short.'],
        ['v-divider', 'vertical', 'boolean', 'false', 'Enable a vertical divider.'],
        ['v-divider', 'content', 'string', 'empty', 'Set the content of the divider for the vertical one.'],
      ],
    };
  },
};
</script>
