<template>
  <div class="head">
    <div
      id="splash-img"
      class="hero fullscreen hero-img parallax-img"
    >
      <div class="hero-body white">
        <div class="content u-text-center">
          <img
            id="logo"
            src="@/assets/vue-cirrus.png"
            alt="vue-cirrus-logo"
          >
          <h1>Vue Cirrus</h1>
          <h6 class="font-light">The Vue library for the modern Cirrus CSS framework.</h6>
          <v-row>
            <v-col c12>
              <router-link to='/components'>
                <v-btn
                  animated
                  center
                  outline
                >
                  Getting Started
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.head {
  margin-bottom: 120px;
}
.head #splash-img {
  background: url('../../assets/head-bg.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#logo {
  max-width: 200px;
}
.head button {
  margin-top: 100px;
}
</style>
