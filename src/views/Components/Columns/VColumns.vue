<template>
  <section class="column-component">
    <p class="no-upper-margin">
      There are so many possible ways to use the <kbd>columns</kbd> functionality in
      Vue Cirrus. Furthermore, it is so easy to use.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Columns in their simplest form are just empty div tags.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Columns/#!"
      component="v-column"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="column-playground">
          <v-row>
            <v-col
              class="column-showcase"
              v-for="i in amountOfColumns"
              :key="i"
              :fluid="propsData.fluid"
              :c="propsData.column"
              :dynamicOffset="propsData.dynamicOffset"
            >
              Column
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-btn-group class="u-center">
            <v-btn color="success" @click="addColumn()">
              <i class="fas fa-plus"></i>
            </v-btn>
            <v-btn color="danger" @click="removeColumn()">
              <i class="fas fa-minus"></i>
            </v-btn>
          </v-btn-group>
        </v-row>
      </template>
    </Playground>
    <v-row>
      <v-col c="4" class="u-center">
        <v-dropdown>
          <template v-slot:button>
            <v-btn dropdown>
              Dynamic Offset <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
            </v-btn>
          </template>
          <v-dropdown-item
            @click="(event) => {
              propsData.dynamicOffset = event.srcElement.innerHTML.toLowerCase()
            }"
          >Center</v-dropdown-item>
          <v-dropdown-item
            @click="(event) => {
              propsData.dynamicOffset = event.srcElement.innerHTML.toLowerCase()
            }"
          >Left</v-dropdown-item>
          <v-dropdown-item
            @click="(event) => {
              propsData.dynamicOffset = event.srcElement.innerHTML.toLowerCase()
            }"
          >Right</v-dropdown-item>
        </v-dropdown>
      </v-col>
      <v-col c="4" class="u-center">
        <v-dropdown>
          <template v-slot:button>
            <v-btn dropdown>
              Column Width <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
            </v-btn>
          </template>
          <v-dropdown-item
            v-for="i in 12"
            :key="i"
            @click="(event) => { propsData.column = event.srcElement.innerHTML.toLowerCase() }"
          >{{ i }}</v-dropdown-item>
        </v-dropdown>
      </v-col>
      <v-col c="4" class="u-center">
        <v-checkbox
          id="fluid-column"
          @change="() => { propsData.fluid = !propsData.fluid }"
        >Fluid</v-checkbox>
      </v-col>
    </v-row>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-col', 'v-row']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">10 Column Width Layout</h5>
    <p class="no-upper-margin">
      You can easily use a 10 column layout width the <kbd>w</kbd> prop in
      each column.
    </p>
    <WidthColumnLayout />

    <v-space xlarge />
    <h5 class="font-light no-upper-margin">10 Column Height Layout</h5>
    <p class="no-upper-margin">
      You can easily use a 10 column layout for the height with the <kbd>h</kbd> prop in
      each column.
    </p>
    <HeightColumnLayout />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import WidthColumnLayout from './Examples/WidthColumnLayout.vue';
import HeightColumnLayout from './Examples/HeightColumnLayout.vue';

export default {
  components: {
    API,
    Playground,
    WidthColumnLayout,
    HeightColumnLayout,
  },

  methods: {
    addColumn() {
      if (this.amountOfColumns < 11) {
        this.amountOfColumns += 1;
      }
    },
    removeColumn() {
      if (this.amountOfColumns > 1) {
        this.amountOfColumns -= 1;
      }
    },
  },

  computed: {
    customCode() {
      let result = '<v-row>\n';
      for (let i = 0; i < this.amountOfColumns; i += 1) {
        result += `  <v-col${this.propsData.fluid ? ' fluid' : ''}${this.propsData.dynamicOffset ? ` dynamicOffset="${this.propsData.dynamicOffset}"` : ''}>Column</v-col>\n`;
      }
      return `${result}</v-row>`;
    },
  },

  data() {
    return {
      amountOfColumns: 3,
      propsData: {
        fluid: false,
        column: null,
        dynamicOffset: null,
      },
      props: [
        ['v-col', 'c', 'string', 'null', 'Set the column width (12 column layout).'],
        ['v-col', 'o', 'string', 'null', 'Set the offset for a column (12 column layout).'],
        ['v-col', 'w', 'string', 'null', 'Set the column width (10 column layout (10, 20, ... 100)).'],
        ['v-col', 'h', 'string', 'null', 'Set the height for a specific column (10 column layout).'],
        ['v-col', 'dynamicOffset', 'string', 'null', 'Add a dynamic offset (left, right, center).'],
        ['v-col', 'fluid', 'boolean', 'false', 'Align the columns with equal amount of space.'],
        ['v-col', 'ignoreScreen', 'boolean', 'false', 'Columns will ignore the screen width.'],
        ['v-row', 'level', 'boolean', 'false', 'Position the columns on one level.'],
        ['v-row', 'noWrap', 'boolean', 'false', 'The given columns will not wrap to the next line.'],
      ],
    };
  },
};
</script>

<style lang="scss">
.column-component {
  .column-playground {
    .row {
      background-color: #2C3E50;
    }
  }

  .column-showcase {
    background-color: #eee;
    border-radius: 5px;
    font-size: .7rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .1rem;
    padding: 10px;
  }
}
</style>
