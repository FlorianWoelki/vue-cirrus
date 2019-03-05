<template>
  <section class="dropdown">
    <h5>Dropdown made simple</h5>
    <p>It is that easy! Simply create dropdown buttons!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col center c6 style="margin-top: 150px;">
        <v-dropdown>
          <template v-slot:dropdownBtn>
            <v-dropdown-btn>Dropdown</v-dropdown-btn>
          </template>
          <v-dropdown-item>
            Chrome
          </v-dropdown-item>
          <v-dropdown-item>
            Firefox
          </v-dropdown-item>
          <v-dropdown-item>
            IE
          </v-dropdown-item>
        </v-dropdown>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props/slots)</h6>
    <API />

    <v-space xlarge v-for="i in 2" :key=i />
  </section>
</template>

<script>
import API from '@/views/Components/Dropdown/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<xmp><v-dropdown>
  <template v-slot:dropdownBtn>
    <v-dropdown-btn>Dropdown</v-dropdown-btn>
  </template>
  <v-dropdown-item>Chrome</v-dropdown-item>
  <v-dropdown-item>Firefox</v-dropdown-item>
  <v-dropdown-item>IE</v-dropdown-item>
</v-dropdown></xmp>`,
    };
  },
};
</script>
