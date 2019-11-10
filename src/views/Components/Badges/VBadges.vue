<template>
  <section class="badges-component">
    <p class="no-upper-margin">
      You can use the <kbd>badges</kbd> to display text on any
      component in the upper right corner. This is mostly used in notifications or messages.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Badges in their simples form display a bubble with text in it.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Badges/#!"
      component="v-badge"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-badge
            :content="propsData.content"
            :left="propsData.position === 'left'"
            :right="propsData.position === 'right'"
            :bottom="propsData.position === 'bottom'"
            :primary="propsData.color === 'primary'"
            :info="propsData.color === 'info'"
            :link="propsData.color === 'link'"
            :dark="propsData.color === 'dark'"
            :success="propsData.color === 'success'"
            :warning="propsData.color === 'warning'"
            :danger="propsData.color === 'danger'"
            :light="propsData.color === 'light'"
          >
            <span>Customize Me</span>
          </v-badge>
        </div>
      </template>
      <v-row>
        <v-col c4 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.color = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Primary</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Dark</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Success</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Warning</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Danger</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Light</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c4 center>
          <v-input-field
            placeholder="Content ..."
            v-model="propsData.content"
          ></v-input-field>
        </v-col>
        <v-col c4 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Position <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Right</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Left</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = event.srcElement.innerHTML.toLowerCase() }"
            >Bottom</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-badge']" />

    <v-space xlarge />
    <v-space xlarge />
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
        content: '5',
        position: '',
        color: '',
      },
      props: [
        ['v-badge', 'content', 'string', '0', 'This is the content displayed in the badge.'],
        ['v-badge', 'right', 'boolean', 'true', 'It will position the badge on the right of the component.'],
        ['v-badge', 'left', 'boolean', 'false', 'It will position the badge on the left of the component.'],
        ['v-badge', 'bottom', 'boolean', 'false', 'It will position the badge on the bottom of the component.'],
        ['v-badge', 'primary', 'boolean', 'false', 'The badge will be the color: Primary.'],
        ['v-badge', 'info', 'boolean', 'false', 'The badge will be the color: Info.'],
        ['v-badge', 'link', 'boolean', 'false', 'The badge will be the color: Link.'],
        ['v-badge', 'dark', 'boolean', 'false', 'The badge will be the color: Dark.'],
        ['v-badge', 'light', 'boolean', 'false', 'The badge will be the color: Light.'],
        ['v-badge', 'success', 'boolean', 'false', 'The badge will be the color: Success.'],
        ['v-badge', 'warning', 'boolean', 'false', 'The badge will be the color: Warning.'],
        ['v-badge', 'danger', 'boolean', 'false', 'The badge will be the color: Danger.'],
      ],
    };
  },
};
</script>
