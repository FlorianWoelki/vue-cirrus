<template>
  <section class="checkbox-component">
    <p class="no-upper-margin">
      You can describe your form better by using the <kbd>v-label</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The component does work best with the <kbd>v-form-group</kbd> and a other form
      component.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Label/#!"
      component="v-label"
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
