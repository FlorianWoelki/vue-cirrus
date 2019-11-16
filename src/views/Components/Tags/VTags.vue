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
        </v-col>
        <v-col c4 center>
        </v-col>
        <v-col c4 center>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-tag']" />

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
        closable: false,
        rounded: false,
        color: '',
        size: '',
      },
      props: [
      ],
    };
  },
};
</script>
