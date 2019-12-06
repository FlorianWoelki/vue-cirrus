<template>
  <section class="tooltips-mixin">
    <p class="no-upper-margin">
      You can use <kbd>tooltips</kbd> for conveying information when a
      user hovers over an element.
      You can apply this mixin to almost every Vue-Cirrus component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Tooltips in their simplest form are just text which will pop up, when
      you hover over the component.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Tooltips/#!"
      component="v-btn"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-btn
            color="primary"
            :tooltipText="propsData.tooltipText"
            :tooltipTopLeft="propsData.position === 'top left'"
            :tooltipTopRight="propsData.position === 'top right'"
            :tooltipBottom="propsData.position === 'bottom'"
            :tooltipBottomLeft="propsData.position === 'bottom left'"
            :tooltipBottomRight="propsData.position === 'bottom right'"
            :tooltipLeft="propsData.position === 'left'"
            :tooltipRight="propsData.position === 'right'"
          >Hover Me</v-btn>
        </div>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-input-field
            placeholder="Tooltip Text ..."
            v-model="propsData.tooltipText"
          ></v-input-field>
        </v-col>
        <v-col c="6" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Position <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Top</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >TopLeft</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >TopRight</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Bottom</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >BottomLeft</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >BottomRight</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Left</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Right</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['tooltip mixin']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Alignment</h5>
    <p class="no-upper-margin">
      You can align pretty simply the tooltip in every single corner.
    </p>
    <TooltipsAlignment />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import TooltipsAlignment from '@/views/Components/Tooltips/Examples/TooltipsAlignment.vue';

export default {
  components: {
    API,
    Playground,
    TooltipsAlignment,
  },

  data() {
    return {
      propsData: {
        tooltipText: 'Hello World',
        position: '',
      },
      props: [
        ['tooltip mixin', 'tooltipText', 'string', 'empty', 'This will be the text displayed in the text.'],
        ['tooltip mixin', 'tooltipTopLeft', 'boolean', 'false', 'Position of the tooltip will be on the top left.'],
        ['tooltip mixin', 'tooltipTopRight', 'boolean', 'false', 'Position of the tooltip will be on the top right.'],
        ['tooltip mixin', 'tooltipBottom', 'boolean', 'false', 'Position of the tooltip will be on the bottom.'],
        ['tooltip mixin', 'tooltipBottomLeft', 'boolean', 'false', 'Position of the tooltip will be on the bottom left.'],
        ['tooltip mixin', 'tooltipBottomRight', 'boolean', 'false', 'Position of the tooltip will be on the bottom right.'],
        ['tooltip mixin', 'tooltipLeft', 'boolean', 'false', 'Position of the tooltip will be on the left.'],
        ['tooltip mixin', 'tooltipRight', 'boolean', 'false', 'Position of the tooltip will be on the right.'],
      ],
    };
  },
};
</script>
