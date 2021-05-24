#!/bin/bash

sed '23 i \
/* eslint-disable */ /* Remove this line, whenever you are ready to commit */ import AppComp from "./App.vue";createApp(AppComp).use(install).mount("#app");
' src/main.ts > tmpfile.ts;
mv tmpfile.ts src/main.ts

cat > src/App.vue << ENDOFFILE
<template>
  <div id="app">
    <v-container class="mt-8">
      <v-btn>Dev</v-btn>
    </v-container>
  </div>
</template>
ENDOFFILE
