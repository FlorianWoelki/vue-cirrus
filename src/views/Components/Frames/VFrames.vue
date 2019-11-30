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
          <v-frame-header textCenter>
            <v-avatar text="FW"></v-avatar>
            <v-frame-title>Florian Woelki</v-frame-title>
            <v-frame-subtitle>Creator</v-frame-subtitle>
          </v-frame-header>

          <v-divider noMargin></v-divider>

          <v-frame-body>
            <v-container noPadding>
              <p class="u-text-center">
                {{ propsData.content }}
              </p>
            </v-container>
          </v-frame-body>

          <v-divider noMargin />

          <v-frame-footer>
            <v-frame-subtitle textCenter>
              <i>
                {{ propsData.footer }}
              </i>
            </v-frame-subtitle>
          </v-frame-footer>
        </v-frame>
      </template>
      <v-row>
        <v-col c4 center>
          <v-input-field
            placeholder="Height ..."
            v-model="propsData.height"
          ></v-input-field>
        </v-col>
        <v-col c4 center>
          <v-input-field
            placeholder="Content ..."
            v-model="propsData.content"
          ></v-input-field>
        </v-col>
        <v-col c4 center>
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
  <v-frame-header textCenter>
    <v-avatar text="FW"></v-avatar>
    <v-frame-title>Florian Woelki</v-frame-title>
    <v-frame-subtitle>Creator</v-frame-subtitle>
  </v-frame-header>

  <v-divider noMargin></v-divider>

  <v-frame-body>
    <v-container noPadding>
      <p class="u-text-center">
        ${this.propsData.content}
      </p>
    </v-container>
  </v-frame-body>

  <v-divider noMargin />

  <v-frame-footer>
    <v-frame-subtitle textCenter>
      <i>
        ${this.propsData.footer}
      </i>
    </v-frame-subtitle>
  </v-frame-footer>
</v-frame>
`;
    },
  },
};
</script>
