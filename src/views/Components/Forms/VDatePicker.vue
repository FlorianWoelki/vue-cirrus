<template>
  <section class="date-picker-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-date-picker</kbd> to create a easy
      datepicker form for date selection.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default datepicker is a simple form with a date input.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/DatePicker/#!"
      component="v-date-picker"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-date-picker date="2020-04-29"></v-date-picker>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-date-picker']" />

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
      propsData: {},
      props: [
        ['v-date-picker', 'date', 'string', 'empty', 'Set the default date of the datepicker (Format: yyyy-mm-dd).'],
        ['v-date-picker', 'title', 'string', 'empty', 'Set the title above the datepicker.'],
        ['v-date-picker', 'subtitle', 'string', 'empty', 'Set the subtitle above the datepicker.'],
        ['v-date-picker', 'information', 'string', 'empty', 'Set the information text below the datepicker.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-date-picker date="2020-04-29"></v-date-picker>`;
    },
  },
};
</script>
