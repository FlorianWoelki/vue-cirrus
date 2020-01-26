<template>
  <v-row>
    <v-col c="6" class="u-center">
      <v-dropdown right>
        <template v-slot:button>
          <v-btn dropdown>
            Right alignment
          </v-btn>
        </template>
        <v-dropdown-item>Option A</v-dropdown-item>
        <v-dropdown-item>Option B</v-dropdown-item>
        <v-dropdown-item>Option C</v-dropdown-item>
      </v-dropdown>
    </v-col>
    <v-col c="6" class="u-center">
      <v-dropdown left>
        <template v-slot:button>
          <v-btn dropdown>
            Left alignment
          </v-btn>
        </template>
        <v-dropdown-item>Option A</v-dropdown-item>
        <v-dropdown-item>Option B</v-dropdown-item>
        <v-dropdown-item>Option C</v-dropdown-item>
      </v-dropdown>
    </v-col>
  </v-row>
</template>
