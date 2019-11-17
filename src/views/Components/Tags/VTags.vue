<template>
  <section class="tags-component">
    <p class="no-upper-margin">
      With the <kbd>v-tag</kbd> component, you can display some colorful
      simple messages on your website. For example, this could be a version tag.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Tags in their simples form just contain the text and the default color.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Tags/#!"
      component="v-tag"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-tag
            :closable="propsData.closable"
            :rounded="propsData.rounded"
            :large="propsData.size === 'large'"
            :xlarge="propsData.size === 'xlarge'"
            :white="propsData.color === 'white'"
            :black="propsData.color === 'black'"
            :primary="propsData.color === 'primary'"
            :link="propsData.color === 'link'"
            :info="propsData.color === 'info'"
            :success="propsData.color === 'success'"
            :warning="propsData.color === 'warning'"
            :danger="propsData.color === 'danger'"
          >Customize Me</v-tag>
        </div>
      </template>
      <v-row>
        <v-col c4 center>
          <v-checkbox
            @change="() => { propsData.closable = !propsData.closable }"
          >Closable</v-checkbox>
          <v-checkbox
            id="rounded-checkbox"
            @change="() => { propsData.rounded = !propsData.rounded }"
          >Rounded</v-checkbox>
        </v-col>
        <v-col c4 center>
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
            >large</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
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
            >White</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Black</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Primary</v-dropdown-item>
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
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-tag', 'v-tag-container']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Color</h5>
    <p class="no-upper-margin">
      There are a lot of colors you can use by default, when using
      a tag on your page.
    </p>
    <TagColors />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import TagColors from '@/views/Components/Tags/Examples/TagColors.vue';

export default {
  components: {
    API,
    Playground,
    TagColors,
  },

  data() {
    return {
      propsData: {
        closable: false,
        rounded: false,
        color: '',
        size: '',
      },
      props: [
        ['v-tag', 'closable', 'boolean', 'false', 'Displays just an "X" in the tag.'],
        ['v-tag', 'large', 'boolean', 'false', 'Set the size of the tag to large.'],
        ['v-tag', 'xlarge', 'boolean', 'false', 'Set the size of the tag to xlarge.'],
        ['v-tag', 'rounded', 'boolean', 'false', 'Set the form of the tag to round.'],
        ['v-tag', 'white', 'boolean', 'false', 'The color of the tag will be white.'],
        ['v-tag', 'black', 'boolean', 'false', 'The color of the tag will be black.'],
        ['v-tag', 'primary', 'boolean', 'false', 'The color of the tag will be red.'],
        ['v-tag', 'link', 'boolean', 'false', 'The color of the tag will be purple.'],
        ['v-tag', 'info', 'boolean', 'false', 'The color of the tag will be blue.'],
        ['v-tag', 'success', 'boolean', 'false', 'The color of the tag will be green.'],
        ['v-tag', 'warning', 'boolean', 'false', 'The color of the tag will be orange.'],
        ['v-tag', 'danger', 'boolean', 'false', 'The color of the tag will be red.'],
        ['v-tag-container', 'grouped', 'boolean', 'false', 'Simply group all tags in the container together.'],
        ['v-tag-container', 'rounded', 'boolean', 'false', 'This container will have rounded edges.'],
      ],
    };
  },
};
</script>
