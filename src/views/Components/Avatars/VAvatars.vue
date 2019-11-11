<template>
  <section class="avatars-component">
    <p class="no-upper-margin">
      The <kbd>v-avatar</kbd> component is used for replacing circular profile
      images. This component will allow you to dynamically size the avatar and
      set a default text, if there is no image.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Avatars in their simplest form display a red circle with custom text in it.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Avatars/#!"
      component="v-avatar"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-avatar
          :text="propsData.text"
          :padded="propsData.padded"
          :xsmall="propsData.size === 'xsmall'"
          :small="propsData.size === 'small'"
          :large="propsData.size === 'large'"
          :xlarge="propsData.size === 'xlarge'"
        />
      </template>
      <v-row>
        <v-col c6 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
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
        <v-col c6 center>
          <v-input-field
            placeholder="Text ..."
            v-model="propsData.text"
          ></v-input-field>
        </v-col>
      </v-row>
    </Playground>

    <v-space />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-avatar']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Size</h5>
    <p class="no-upper-margin">
      To define the <kbd>size</kbd> of a avatar, you have 4 options
      to define the size of the avatar.
    </p>
    <AvatarSize />

    <v-space />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import AvatarSize from '@/views/Components/Avatars/Examples/AvatarSize.vue';

export default {
  components: {
    API,
    Playground,
    AvatarSize,
  },

  data() {
    return {
      propsData: {
        text: 'FW',
        padded: false,
        size: '',
      },
      props: [
        ['v-avatar', 'src', 'string', 'empty', 'This is the image source of the avatar.'],
        ['v-avatar', 'text', 'string', 'empty', 'A placeholder text which will be placed in the avatar.'],
        ['v-avatar', 'padded', 'boolean', 'false', 'Enable padding around avatar.'],
        ['v-avatar', 'xsmall', 'boolean', 'false', 'This size is for xsmall avatars.'],
        ['v-avatar', 'small', 'boolean', 'false', 'This size is for small avatars.'],
        ['v-avatar', 'large', 'boolean', 'false', 'This size is for large avatars.'],
        ['v-avatar', 'xlarge', 'boolean', 'false', 'This size is for xlarge avatars.'],
      ],
    };
  },
};
</script>
