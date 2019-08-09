<template>
  <div class="demo">
    <v-navbar
      dark
    >
      <div class="nav-center">
        <v-navbar-item>hello</v-navbar-item>
        <v-navbar-item>world</v-navbar-item>
        <v-navbar-item>without</v-navbar-item>
        <v-navbar-item>knowing</v-navbar-item>
        <v-navbar-item>it</v-navbar-item>
      </div>
    </v-navbar>

    <v-container>
      <v-row level>
        <v-col c6>
          <v-card
            animated
            title="Title"
            subtitle="Subtitle"
            footerText="Footer text"
            height="200"
          >
            <v-card-content>
              <p>
                Located two hours south of Sydney in the Southern Highland of New South Wales...
              </p>
            </v-card-content>
          </v-card>
        </v-col>
        <v-col c6>
          <h5>test</h5>
        </v-col>
      </v-row>
    </v-container>

    <v-space v-for="i in 20" :key=i xlarge />

    <section id="mysection" class="clearfix">
      <div class="row no-padding">
        <div class="fill-height fill-width">
          <div class="vertical-align-middle">
            <div class="content text-center">
              <h3 class="white">Something</h3>
              <div class="divider divider-short center"></div>
            </div>
          </div>
        </div>

        <div class="col-right padded">
          <div class="content">
            <h3>test</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = () => {
      const scrollTop = window.pageYOffset || (document.documentElement
        || document.body.parentNode || document.body).scrollTop;

      const refElement = document.getElementById('mysection');
      const elementOffset = refElement.offsetTop;

      if (scrollTop >= elementOffset - 400) {
        refElement.getElementsByClassName('fill-height')[0].classList.remove('fill-width');
      } else {
        refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
      }
    };
  },
};
</script>


<style>
@media screen and (min-width: 992px) {
  #mysection {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
  }
}

#mysection .row {
  position: relative;
  background: #fff;
}

section {
  display: block;
}

#mysection .row .fill-height.fill-width {
  width: 100%;
}

#mysection .row .fill-height {
  background: #feac40;
  background-image: -webkit-radial-gradient(center center, circle cover, #f7484e, #f7484e);
}

@media screen and (min-width: 992px) {
  #mysection .fill-height {
    position: absolute;
    width: 40%;
  }
}

.fill-height {
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  transition: all .4s;
  transition-delay: 0s;
}

#mysection .row .col-right {
  min-height: 100vh;
}

@media screen and (min-width: 992px) {
  #mysection .col-right {
    width: 60%;
  }
}

@media screen and (min-width: 992px) {
  .col-right {
    left: 40%;
  }
}

.col-right {
  position: relative;
}

.padded {
  padding: 5rem 0 !important;
}
</style>
