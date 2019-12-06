<template>
  <section class="frames-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-card</kbd> component to display beautiful designed and
      animated cards for your website.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The simplest card is a card with a title, content and a simple footer.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Frames/#!"
      component="v-frame"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-frame :height="propsData.height">
          <template v-slot:header>
            <v-avatar class="u-text-center" text="FW"></v-avatar>
          </template>
          <template v-slot:title><div class="u-text-center">Florian Woelki</div></template>
          <template v-slot:subtitle>
            <div class="u-text-center">Creator</div>
            <v-divider class="u-no-margin"></v-divider>
          </template>

          <v-container class="u-no-padding">
            <p class="u-text-center">
              {{ propsData.content }}
            </p>
          </v-container>

          <v-divider class="u-no-margin" />

          <template v-slot:footer>
            <div class="u-text-center">
              <i>
                {{ propsData.footer }}
              </i>
            </div>
          </template>
        </v-frame>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Height ..."
            v-model="propsData.height"
          ></v-input-field>
        </v-col>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Content ..."
            v-model="propsData.content"
          ></v-input-field>
        </v-col>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Footer ..."
            v-model="propsData.footer"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-frame']" />

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
        height: '30rem',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores molestiae, blanditiis maxime perspiciatis error nisi consectetur quasi nemo impedit numquam eligendi ratione nobis qui voluptatum et quod minus aut.',
        footer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      props: [
        ['v-frame', 'height', 'string', '30rem', 'Set the height for the frame.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-frame height="${this.propsData.height}">
  <template v-slot:header>
    <v-avatar class="u-text-center" text="FW"></v-avatar>
  </template>
  <template v-slot:title><div class="u-text-center">Florian Woelki</div></template>
  <template v-slot:subtitle>
    <div class="u-text-center">Creator</div>
    <v-divider class="u-no-margin"></v-divider>
  </template>

  <v-container class="u-no-padding">
    <p class="u-text-center">
      ${this.propsData.content}
    </p>
  </v-container>

  <v-divider class="u-no-margin" />

  <template v-slot:footer>
    <div class="u-text-center">
      <i>
        ${this.propsData.footer}
      </i>
    </div>
  </template>
</v-frame>
`;
    },
  },
};
</script>
