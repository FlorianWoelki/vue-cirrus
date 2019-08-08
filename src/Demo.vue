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
      <v-row>
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
      </v-row>
    </v-container>
  </div>
</template>
