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
          :size="propsData.size"
          :uppercase="propsData.uppercase"
        >
          Customize Me
        </v-headline>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-checkbox
            @change="() => { propsData.uppercase = !propsData.uppercase }"
          >Uppercase</v-checkbox>
        </v-col>
        <v-col c="6" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.size = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >1</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >2</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >3</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >4</v-dropdown-item>
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
        ['v-headline', 'size', 'string', 'null', 'Set the headline size (1, 2, 3, 4 => 1 is largest).'],
        ['v-headline', 'uppercase', 'boolean', 'false', 'Set the headline to uppercase.'],
      ],
    };
  },
};
</script>
