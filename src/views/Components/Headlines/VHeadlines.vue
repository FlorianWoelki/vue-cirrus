<template>
  <section class="headlines-component">
    <p class="no-upper-margin">
      Headlines are bigger than the normal html <kbd>h</kbd> tags.
      <kbd>v-headline</kbd> is a simple component to create big stunning
      Headlines.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Tabs are so clean and easy to see by their default appearance.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Headlines/#!"
      component="v-headline"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-headline
          class="u-text-center"
          :h1="propsData.h1"
          :h2="propsData.h2"
          :h3="propsData.h3"
          :h4="propsData.h4"
          :uppercase="propsData.uppercase"
        >
          Customize Me
        </v-headline>
      </template>
      <v-row>
        <v-col c6 center>
          <v-checkbox
            @change="() => { propsData.uppercase = !propsData.uppercase }"
          >Uppercase</v-checkbox>
        </v-col>
        <v-col c6 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.size = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >H1</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >H2</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >H3</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >H4</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-headline']" />

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
        uppercase: false,
      },
      props: [
        ['v-headline', 'h1', 'boolean', 'false', 'Set the headline size to 6.5rem.'],
        ['v-headline', 'h2', 'boolean', 'false', 'Set the headline size to 5.5rem.'],
        ['v-headline', 'h3', 'boolean', 'false', 'Set the headline size to 4.5rem.'],
        ['v-headline', 'h4', 'boolean', 'false', 'Set the headline size to 3.5rem.'],
        ['v-headline', 'uppercase', 'boolean', 'false', 'Set the headline to uppercase.'],
      ],
    };
  },
};
</script>
