<template>
  <section class="tags-component">
    <p class="no-upper-margin fix-text-overflow">
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
            :size="propsData.size"
            :color="propsData.color"
          >Customize Me</v-tag>
        </div>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-checkbox
            @change="() => { propsData.closable = !propsData.closable }"
          >Closable</v-checkbox>
          <v-checkbox
            id="rounded-checkbox"
            @change="() => { propsData.rounded = !propsData.rounded }"
          >Rounded</v-checkbox>
        </v-col>
        <v-col c="4" class="u-center">
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
            >large</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="4" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
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

    <v-space />
    <h5 class="font-light no-upper-margin">Rounded</h5>
    <p class="no-upper-margin">
      It is possible to use the <kbd>rounded</kbd> property to round
      the tag.
    </p>
    <TagRounded />

    <v-space />
    <h5 class="font-light no-upper-margin">Tag Container Grouped</h5>
    <p class="no-upper-margin">
      With the <kbd>tag-container</kbd> component you can group many
      tags together to one group.
    </p>
    <TagContainerGrouped />

    <v-space />
    <h5 class="font-light no-upper-margin">Tag Container Rounded</h5>
    <p class="no-upper-margin">
      With the <kbd>tag-container</kbd> component you can group and
      round the tags in a group together.
    </p>
    <TagContainerRounded />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import TagColors from '@/views/Components/Tags/Examples/TagColors.vue';
import TagRounded from '@/views/Components/Tags/Examples/TagRounded.vue';
import TagContainerRounded from '@/views/Components/Tags/Examples/TagContainerRounded.vue';
import TagContainerGrouped from '@/views/Components/Tags/Examples/TagContainerGrouped.vue';

export default {
  components: {
    API,
    Playground,
    TagColors,
    TagRounded,
    TagContainerGrouped,
    TagContainerRounded,
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
        ['v-tag', 'rounded', 'boolean', 'false', 'Set the form of the tag to round.'],
        ['v-tag', 'deletable', 'boolean', 'false', 'When the exit button is clicked in toast, it will vanish.'],
        ['v-tag', 'size', 'string', 'null', 'Set the size of the tag (large, xlarge).'],
        ['v-tag', 'color', 'string', 'null', 'Set the color of the tag (white, black, primary, link, info, success, warning, danger).'],
        ['v-tag-container', 'grouped', 'boolean', 'false', 'Simply group all tags in the container together.'],
        ['v-tag-container', 'rounded', 'boolean', 'false', 'This container will have rounded edges.'],
      ],
    };
  },
};
</script>
