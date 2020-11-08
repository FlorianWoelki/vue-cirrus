<template>
  <section class="checkbox-component">
    <p class="no-upper-margin">
      Simply use the <kbd>v-checkbox</kbd> component to create easy checkboxes
      for your single page application.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default checkbox is unselected and has a red tick.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Checkbox/#!"
      component="v-checkbox"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-checkbox
          class="u-center"
          :success="propsData.state === 'success'"
          :error="propsData.state === 'error'"
          :checked="propsData.checked"
          :disabled="propsData.disabled"
        >Customize Me</v-checkbox>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-radio-btn
            id="success"
            @change="(event) => { propsData.state = 'success' }"
          >Success Color</v-radio-btn>
          <v-radio-btn
            id="error"
            @change="(event) => { propsData.state = 'error' }"
          >Error Color</v-radio-btn>
        </v-col>
        <v-col c="6" class="u-center">
          <v-checkbox
            id="checked-checkbox"
            @change="() => { propsData.checked = !propsData.checked }"
          >Checked</v-checkbox>
          <v-checkbox
            id="disabled-checkbox"
            @change="() => { propsData.disabled = !propsData.disabled }"
          >Disabled</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-checkbox']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import Playground from '@/components/Playground/Playground.vue';
import API from '../API.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {
        state: null,
        disabled: false,
        checked: false,
      },
      props: [
        ['v-checkbox', 'id', 'string', 'input-checkbox', 'You need to set the id, if you want to have more checkboxes.'],
        ['v-checkbox', 'checked', 'boolean', 'false', 'Set the checked state of the checkbox.'],
        ['v-checkbox', 'success', 'boolean', 'false', 'Set the color of the checkbox to a green one.'],
        ['v-checkbox', 'error', 'boolean', 'false', 'Set the color of the checkbox to a red one.'],
        ['v-checkbox', 'disabled', 'boolean', 'false', 'Set the disabled state of the checkbox.'],
        ['v-checkbox', '@change', 'function', '() => {}', 'Get the event, when a checkbox has changed.'],
      ],
    };
  },
};
</script>
