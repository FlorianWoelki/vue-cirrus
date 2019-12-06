<template>
  <section class="pagination-component">
    <p class="no-upper-margin">
      Simply use the <kbd>v-pagination</kbd> component to create easy pagination
      with just a few lines of code.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Pagination in their simples form have no border and a hover color.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Pagination/#!"
      component="v-pagination"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-pagination
            :bordered="propsData.bordered"
          >
            <v-pagination-item disabled>Prev</v-pagination-item>
            <v-pagination-item selected>1</v-pagination-item>
            <v-pagination-item>2</v-pagination-item>
            <v-pagination-item>3</v-pagination-item>
            <v-pagination-item>Next</v-pagination-item>
          </v-pagination>
        </div>
      </template>
      <v-row>
        <v-col class="u-center" c="12">
          <v-checkbox
            @change="() => { propsData.bordered = !propsData.bordered }"
          >Bordered Pagination</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-pagination', 'v-pagination-item']" />

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
        bordered: false,
        xlarge: false,
      },
      props: [
        ['v-pagination', 'bordered', 'boolean', 'false', 'Activate the border around the pagination.'],
        ['v-pagination-item', 'selected', 'boolean', 'false', 'Set the pagination item in a selected red state.'],
        ['v-pagination-item', 'disabled', 'boolean', 'false', 'Set the pagination item in a disabled state.'],
        ['v-pagination-item', 'href', 'string', '#', 'Set the href, when someone clicks the pagination item.'],
        ['v-pagination-item', '@click', 'function', '() => {}', 'Get the event, when someone clicks the pagination item.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-pagination${this.propsData.bordered ? ' bordered' : ''}>
  <v-pagination-item disabled>Prev</v-pagination-item>
  <v-pagination-item selected>1</v-pagination-item>
  <v-pagination-item>2</v-pagination-item>
  <v-pagination-item>3</v-pagination-item>
  <v-pagination-item>Next</v-pagination-item>
</v-pagination>
`;
    },
  },
};
</script>
