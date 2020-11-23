<template>
  <v-row>
    <v-col c="12" class="u-center">
      <v-dropdown>
        <template v-slot:button>
          <v-btn dropdown class="u-flex u-items-center">
            <span>Dropdown</span>
            <svg style="width: 1.5em; height: 1.5em" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </v-btn>
        </template>
        <v-dropdown-item>Option A</v-dropdown-item>
        <v-dropdown-item>Option B</v-dropdown-item>
        <v-dropdown-item>Option C</v-dropdown-item>
      </v-dropdown>
    </v-col>
  </v-row>
</template>
