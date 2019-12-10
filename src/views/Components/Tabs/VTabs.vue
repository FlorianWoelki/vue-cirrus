<template>
  <section class="tabs-component">
    <p class="no-upper-margin">
      You can use tabs with the <kbd>v-tab</kbd> component. Simply specify how many
      tabs you want to have and Vue-Cirrus fill in it for you.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Tabs are so clean and easy to see by their default appearance.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Tabs/#!"
      component="v-tab"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-tabs
          :size="propsData.size"
          :position="propsData.position"
          :mode="propsData.mode"
        >
          <v-tab href="/#/components/Tabs/#!">Tab 1</v-tab>
          <v-tab href="/#/components/Tabs/#!">Tab 2</v-tab>
          <v-tab href="/#/components/Tabs/#!">Tab 3</v-tab>
        </v-tabs>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Style <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.mode = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.mode = event.srcElement.innerHTML.toLowerCase() }"
            >Fill</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.mode = event.srcElement.innerHTML.toLowerCase() }"
            >Depth</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.mode = event.srcElement.innerHTML.toLowerCase() }"
            >Classic</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="4" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >xSmall</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >Small</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >Large</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="4" class="u-center">
          <v-radio-btn
            id="left"
            @change="(event) => { propsData.position = '' }"
          >Left</v-radio-btn>
          <v-radio-btn
            id="center"
            @change="(event) => { propsData.position = event.srcElement.id }"
          >Center</v-radio-btn>
          <v-radio-btn
            id="right"
            @change="(event) => { propsData.position = event.srcElement.id }"
          >Right</v-radio-btn>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-tabs', 'v-tab']" />

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
        size: '',
        position: '',
        mode: '',
      },
      props: [
        ['v-tabs', 'size', 'string', 'null', 'Set the size of the tab component (xsmall, small, large, xlarge).'],
        ['v-tabs', 'position', 'string', 'null', 'Position the tabs (center, right).'],
        ['v-tabs', 'mode', 'string', 'null', 'Set the style mode of the tabs (depth, fill, classic).'],
        ['v-tab', 'selected', 'boolean', 'false', 'This tab will have the selected color.'],
        ['v-tab', 'href', 'string', '#!', 'Set the href, when clicked on a tab.'],
        ['v-tab', '@click', 'function', '() => {}', 'This event will be fired, whenever someones clicks on the tab component.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-tabs${this.propsData.position !== '' ? `\n  position="${this.propsData.position}"` : ''}${this.propsData.size !== '' ? `\n  size="${this.propsData.size}"` : ''}${this.propsData.mode !== '' ? `\n  mode="${this.propsData.mode}"` : ''}
>
  <v-tab>Tab 1</v-tab>
  <v-tab>Tab 2</v-tab>
  <v-tab>Tab 3</v-tab>
</v-tabs>
`;
    },
  },
};
</script>
