<template>
  <section class="checkbox-component">
    <p class="no-upper-margin">
      The <kbd>v-form-group</kbd> component will make a clustered form of multiple
      form components.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      You can use the component by using two other form components.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/FormGroup/#!"
      component="v-form-group"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-form-group>
            <v-label>$</v-label>
            <input
              type="number"
              placeholder="How much?"
              class="form-group-input"
            >
          </v-form-group>
        </div>
      </template>
    </Playground>

    <v-space xlarge />

    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    Playground,
  },

  data() {
    return {
      propsData: {},
    };
  },

  computed: {
    customCode() {
      return `
<v-form-group>
  <v-label>$</v-label>
  <input
    type="number"
    placeholder="How much?"
    class="form-group-input"
  >
</v-form-group>`;
    },
  },
};
</script>
