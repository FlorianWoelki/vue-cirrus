<template>
  <section class="navbars-component">
    <h5>Navbars</h5>
    <p>There is a really easy way to create Navbars in Vue-Cirrus!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 125px;"
      >
        <v-link>Preview is available on Home view.</v-link>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
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
      code: `<xmp><v-navbar
  title="Logo"
  fixed
>
  <div class="nav-left">
    <v-nav-dropdown>
      <template v-slot:title><i>Dropdown</i></template>
      <v-nav-dropdown-item>Test 1</v-nav-dropdown-item>
      <v-nav-dropdown-item>Test 2</v-nav-dropdown-item>
      <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
    </v-nav-dropdown>
  </div>
  <div class="nav-right">
    <v-navbar-item selected>Selected</v-navbar-item>
    <v-navbar-item>Link 1</v-navbar-item>
    <v-nav-dropdown animated>
      <template v-slot:title><b>Dropdown</b></template>
      <v-nav-dropdown-item><h1>Test 1</h1></v-nav-dropdown-item>
      <v-nav-dropdown-item><b>Test 2</b></v-nav-dropdown-item>
      <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
    </v-nav-dropdown>
    <v-nav-dropdown 
      clickable
      dropdownId="clickable-dropdown"
    >
      <template v-slot:title><u>Dropdown</u></template>
      <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
      <v-nav-dropdown-item>Test 4</v-nav-dropdown-item>
      <v-nav-dropdown-item>Test 5</v-nav-dropdown-item>
    </v-nav-dropdown>
  </div>
</v-navbar></xmp>`,
      props: {
        title: ['title', 'empty', 'String', '(Navbar) Title of navbar'],
        brandLink: ['brandLink', '!#', 'String', '(Navbar) Link for the brand name'],
        fixed: ['fixed', 'false', 'Boolean', '(Navbar) If the navbar is fixed on top'],
        dark: ['dark', 'false', 'Boolean', '(Navbar) If the navbar has the dark style'],
        clear: ['clear', 'false', 'Boolean', '(Navbar) If the navbar has the clear style'],
        disableMobileNavbar: ['disableMobileNavbar', 'false', 'Boolean', '(Navbar) Disables the automatic generated mobile navbar'],
        animated: ['animated', 'false', 'Boolean', '(NavDropdown) If the dropdown is animated'],
        clickable: ['clickable', 'false', 'Boolean', '(NavDropdown) If the dropdown is clickable'],
        dropdownId: ['dropdownId', 'empty', 'String', '(NavDropdown) Id for the dropdown'],
        link: ['link', 'empty', 'String', '(NavbarItem/NavDropdownItem) Link for the component'],
        selected: ['selected', 'false', 'Boolean', '(NavbarItem) If navbar item is selected'],
      },
    };
  },
};
</script>
