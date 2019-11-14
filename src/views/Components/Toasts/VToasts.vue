<template>
  <section class="code-component">
    <p class="no-upper-margin">
      With the <kbd>v-toast</kbd> component, you can display information or
      simple meta data to notify the user.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Toasts in their simples form just contain the title and some text.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Toasts/#!"
      component="v-toast"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-toast
          :title="propsData.title"
          :closable="propsData.closable"
          :primary="propsData.color === 'primary'"
          :success="propsData.color === 'success'"
          :warning="propsData.color === 'warning'"
          :error="propsData.color === 'error'"
          :info="propsData.color === 'info'"
          :link="propsData.color === 'link'"
        >{{ propsData.text }}</v-toast>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-code']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Languages</h5>
    <p class="no-upper-margin">
      The <kbd>v-code</kbd> component supports different code languages.
    </p>

    <v-space />
    <h5 class="font-light no-upper-margin">Copyable code</h5>
    <p class="no-upper-margin">
      It is possible, to apply the <kbd>copyable</kbd> property, whenever
      you want to let the user copy something.
    </p>
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
        title: 'Customize Me',
        text: 'This is some example toast text to display.',
        closable: false,
        color: '',
      },
      props: [
      ],
    };
  },
};
</script>
