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
      href="/#/components/InputField/#!"
      component="v-input-field"
      :customCode="customCode"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-input-field
          class="u-center"
          :pilled="propsData.pilled"
          :placeholder="propsData.placeholder"
        ></v-input-field>
      </template>
      <v-row level>
        <v-col c="6">
          <v-checkbox
            id="pilled-input-field"
            @change="() => { propsData.pilled = !propsData.pilled }"
          >Pilled</v-checkbox>
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
    <API :data="props" :dropdownItems="['v-input-field']" />

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
        pilled: false,
        placeholder: null,
      },
      props: [
        ['v-input-field', 'size', 'string', 'null', 'Set the size of the input field (xsmall, small, large, xlarge).'],
        ['v-input-field', 'icon', 'boolean', 'false', 'Enable a icon functionality in front of the input field.'],
        ['v-input-field', 'error', 'boolean', 'false', 'Set the input field to an error state.'],
        ['v-input-field', 'success', 'boolean', 'false', 'Set the input field to a success state.'],
        ['v-input-field', 'focused', 'boolean', 'false', 'Set the focused state of the input field.'],
        ['v-input-field', 'infoText', 'string', 'empty', 'Set the info text for the input field.'],
        ['v-input-field', 'subtitle', 'string', 'empty', 'Set the subtitle for the input field.'],
        ['v-input-field', 'title', 'string', 'empty', 'Set the title for the input field.'],
        ['v-input-field', 'subtitleInline', 'boolean', 'false', 'Set the subtitle of the input field inline.'],
        ['v-input-field', 'value', 'string', 'empty', 'Set the value of the input field.'],
        ['v-input-field', 'placeholder', 'string', 'empty', 'Set the placeholder of the input field.'],
        ['v-input-field', 'type', 'string', 'text', 'Set the type of the input field.'],
        ['v-input-field', 'select', 'boolean', 'false', 'Set the select state of the input field.'],
        ['v-input-field', 'noControl', 'boolean', 'false', 'Input field will not be controlled.'],
        ['v-input-field', 'pilled', 'boolean', 'false', 'Set the form of the input field to a pilled one.'],
        ['v-input-field', 'input', 'function', '() => {}', 'Catch the input event of the given input field.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-input-field${this.propsData.pilled ? ' pilled' : ''}${this.propsData.placeholder ? ` placeholder="${this.propsData.placeholder}"` : ''}></v-input-field>`;
    },
  },
};
</script>
