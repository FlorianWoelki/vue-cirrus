<template>
  <div id="one-page">
    <v-navbar brandTitle="OnePage" dark fixed>
      <div class="nav-right">
        <v-navbar-item selected>Home</v-navbar-item>
        <v-navbar-item>Pricing</v-navbar-item>
      </div>
    </v-navbar>

    <v-parallax fullscreen image="https://www.ubackground.com/_ph/17/56501308.jpg">
      <v-row>
        <v-col>
          <h1 class="white uppercase u-text-center">One Page</h1>
          <p class="white u-text-center">A One Page product made with Vue Cirrus</p>
        </v-col>
      </v-row>
    </v-parallax>

    <v-space xlarge />
    <v-container>
      <h2>Headline 2</h2>
      <v-divider short />
    </v-container>
  </div>
</template>
