<template>
  <section class="dropdown-component">
    <h5>Dropdown made simple</h5>
    <p>It is that easy! Simply create dropdown buttons!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 100px;"
      >
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
    <API :data=props />

    <v-space
      xlarge
      v-for="i in 2"
      :key=i
    />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<v-dropdown>
  <template v-slot:dropdownBtn>
    <v-dropdown-btn>Dropdown</v-dropdown-btn>
  </template>
  <v-dropdown-item>Chrome</v-dropdown-item>
  <v-dropdown-item>Firefox</v-dropdown-item>
  <v-dropdown-item>IE</v-dropdown-item>
</v-dropdown>`,
      props: {
        right: ['right', 'false', 'Boolean', 'Right aligned dropdown'],
        left: ['left', 'false', 'Boolean', 'Left aligned dropdown'],
        link: ['link', 'Empty', 'String', 'For DropdownItem: Source for link'],
        onClick: ['onClick', 'null', 'Function', 'Button click event'],
        animated: ['animated', 'false', 'Boolean', 'Button click animation'],
        btnStyle: ['btnStyle', 'Empty', 'String', 'Button color'],
        xsmall: ['xsmall', 'false', 'Boolean', 'Button xsmall size'],
        small: ['small', 'false', 'Boolean', 'Button small size'],
        large: ['large', 'false', 'Boolean', 'Button large size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Button xlarge size'],
        loadingLeft: ['loadingLeft', 'false', 'Boolean', 'Button Loading left animation'],
        loadingRight: ['loadingRight', 'false', 'Boolean', 'Button Loading right animation'],
      },
    };
  },
};
</script>
