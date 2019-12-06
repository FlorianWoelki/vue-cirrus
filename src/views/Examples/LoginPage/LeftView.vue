<template>
  <div class="left-view">
    <div class="h-100 u-vertical-center">
      <div class="u-text-center white">
        <v-container>
          <p class="font-light">My Enterprise Edition</p>
          <h6>The framework for every team!</h6>
          <h6 class="font-light">
            Unlimited possibilities. Unlimited components. Unlimited projects.
          </h6>
          <v-space />
          <v-btn color="link" class="u-center">Go for it</v-btn>

          <div class="bottom-area">
            <p class="u-uppercase">Trusted by the best companies out there!</p>
            <v-row>
              <v-col c="4">
                <h5>cirrus</h5>
              </v-col>
              <v-col c="4">
                <h5>vue</h5>
              </v-col>
              <v-col c="4">
                <h5>js</h5>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.left-view {
  height: 100vh;

  .h-100 {
    height: 100%;
    min-height: 300px;
    background-image: linear-gradient(to bottom,
      rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.53)),
      url(https://image.freepik.com/free-photo/business-people-touching-working-laptop-successful-teamwork-office-background_34200-228.jpg);
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 0px 9px 10px #00000017;
  }

  .bottom-area {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 66.666%;

    h5 {
      color: lightgray;
    }
    p {
      margin: 0;
      color: lightgray;
      text-transform: uppercase;
      font-size: 13px;
    }
  }
}
</style>
