<template>
  <div class="features-explained">
    <v-row class="u-center">
      <v-col c="9">
        <v-parallax-element :speed="0.5" :stopValue="450">
          <div class="card u-center">
            <v-container>
              <h3 class="u-text-center" style="margin-top:25px;">Why Vue Cirrus?</h3>
              <v-divider short class="u-center" />
              <v-row class="mt-4 u-text-center">
                <v-col c="4">
                  <i class="fas fa-terminal fa-3x"></i>
                  <h6>Easy to install</h6>
                  <p class="font-light">
                    Vue-Cirrus is really easy to install.
                    It just takes under one minute to setup everything up for your upcoming project.
                  </p>
                </v-col>
                <v-col c="4">
                  <i class="fas fa-feather fa-3x"></i>
                  <h6>Really lightweight</h6>
                  <p class="font-light">
                    Every single component is easy to use and easy to maintain.
                    You can easily change the style or behaviour of these components.
                  </p>
                </v-col>
                <v-col c="4">
                  <i class="fas fa-door-open fa-3x"></i>
                  <h6>Open Source</h6>
                  <p class="font-light">
                    The best thing is, this project is built on the open source CSS
                    framework Cirrus and it is open source!
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-parallax-element>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.features-explained .card {
  max-width: 1250px;
}

.features-explained .divider {
  margin-top: 5px;
}
</style>
