<template>
  <div class="head">
    <div id="splash-img" class="hero fullscreen hero-img parallax-img">
      <div class="hero-body white">
        <div class="content text-center">
          <img
            id="logo"
            src="https://github.com/FlorianWoelki/vue-cirrus/blob/master/img/vue-cirrus.png?raw=true"
            alt="vue-cirrus-logo"
          >
          <h1>Vue Cirrus</h1>
          <h6 class="light">The Vue library for the modern Cirrus CSS framework.</h6>
          <v-btn
            animated
            center
            btnStyle="outline"
            id="btn-getting-started"
          >
            Getting Started
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.head {
  height: 100vh;
}
.head #splash-img {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('https://cdn.pixabay.com/photo/2018/05/04/09/14/natural-3373519_1280.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#logo {
  max-width: 200px;
}
#btn-getting-started {
  margin-top: 100px;
}
</style>
