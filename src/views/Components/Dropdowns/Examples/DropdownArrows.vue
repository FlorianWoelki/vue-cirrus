<template>
  <v-row>
    <v-col c="12" class="u-center">
      <v-dropdown>
        <template v-slot:button>
          <v-btn dropdown>
            FA Arrow <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
          </v-btn>
        </template>
        <v-dropdown-item>Option A</v-dropdown-item>
        <v-dropdown-item>Option B</v-dropdown-item>
        <v-dropdown-item>Option C</v-dropdown-item>
      </v-dropdown>
    </v-col>
  </v-row>
</template>
