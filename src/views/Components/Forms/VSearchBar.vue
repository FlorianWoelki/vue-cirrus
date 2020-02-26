<template>
  <section class="input-field-component">
    <p class="no-upper-margin">
      Easily create dynamic input fields with the <kbd>v-input-field</kbd>
      component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default input field is just a rectangle with an input functionality.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/SearchBar/#!"
      component="v-search-bar"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-search-bar
          :noButton="propsData.noButton"
          :placeholder="propsData.placeholder"
        >Customize Me</v-search-bar>
      </template>
      <v-row level>
        <v-col c="6">
          <v-checkbox
            id="search-bar-no-button"
            @change="() => { propsData.noButton = !propsData.noButton }"
          >No Button</v-checkbox>
        </v-col>
        <v-col c="6">
          <v-input-field
            placeholder="Placeholder ..."
            v-model="propsData.placeholder"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-search-bar']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import API from '../API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {
        noButton: false,
        placeholder: '',
      },
      props: [
        ['v-search-bar', 'placeholder', 'string', 'Search', 'Set the placeholder of the search bar.'],
        ['v-search-bar', 'value', 'string', 'empty', 'Set the value of the search bar.'],
        ['v-search-bar', 'noButton', 'boolean', 'false', 'Disable the button on the search bar.'],
        ['v-search-bar', 'searchAction', 'function', '() => 1', 'Set the action, when someone clicks on the search button.'],
      ],
    };
  },
};
</script>
