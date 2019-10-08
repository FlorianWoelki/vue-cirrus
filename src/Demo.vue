<template>
  <div class="demo">
    <v-parallax
      fullscreen
      link="image.png"
      image="https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-0.3.5&s=f8ac09c936bac8105fde945ea267da65&auto=format&fit=crop&w=2560&q=100"
    >
      <h1 class="white">Hello World</h1>
      <v-divider />
    </v-parallax>
    <v-row center>
      <v-col c6>
        <v-parallax-element>
          <v-card>
            <v-card-image
              image="background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);"
            >
              <v-card-title>test</v-card-title>
              <v-card-subtitle>
                <v-tag-container grouped rounded>
                  <v-tag primary xlarge>Hello</v-tag>
                  <v-tag warning xlarge>My</v-tag>
                  <v-tag black xlarge>World</v-tag>
                </v-tag-container>
              </v-card-subtitle>
            </v-card-image>
            <v-card-content>
              <v-avatar src="assets/logo.png"></v-avatar>
              <p>This is some basic simple card text</p>
              <a href="#">#vue-cirrus</a>
              <a href="#">#cirrus</a>
            </v-card-content>

            <v-card-footer>6:32 PM - 3 Jul 19</v-card-footer>

            <v-card-actions>
              <v-row center>
                <v-btn disabled primary @click="test">Cancel</v-btn>
                <v-btn success>Save</v-btn>
                <v-btn link>Post</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-parallax-element>

        <v-next-prev>
          <v-prev-btn prevText="Prev">Previous</v-prev-btn>
          <v-next-btn nextText="Next" @click="test">NEEXT</v-next-btn>
        </v-next-prev>

        <v-row center>
          <v-col c6>
            <v-frame>
              <v-frame-header textCenter>
                <v-avatar text="FW" />
                <v-frame-title>Florian Woelki</v-frame-title>
                <v-frame-subtitle>Creator</v-frame-subtitle>
              </v-frame-header>

              <v-divider noMargin />

              <v-frame-body>
                <v-container noPadding>
                  <p class="u-text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro maiores molestiae, blanditiis maxime perspiciatis error
                  nisi consectetur quasi nemo impedit numquam eligendi ratione
                  nobis qui voluptatum et quod minus aut.</p>
                </v-container>
              </v-frame-body>

              <v-divider noMargin />

              <v-frame-footer>
                <v-frame-subtitle textCenter>
                  <i>
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </i>
                </v-frame-subtitle>
              </v-frame-footer>
            </v-frame>
          </v-col>
        </v-row>

        <v-dropdown>
          <template v-slot:button><v-dropdown-btn primary>Test</v-dropdown-btn></template>
          <v-dropdown-item @click="test">Hello</v-dropdown-item>
          <v-dropdown-item>my</v-dropdown-item>
          <v-dropdown-item>World</v-dropdown-item>
        </v-dropdown>

        <v-btn outline primary pilled>test</v-btn>

        <v-form-group>
          <v-input-field
            pilled
            noControl
            placeholder="Hello World"
          >
          </v-input-field>
          <v-btn primary outline>test</v-btn>
        </v-form-group>

        <v-row center>
          <v-col fluid textCenter>
            <v-headline h3>A</v-headline>
          </v-col>
          <v-col fluid textCenter>
            <v-headline h3>B</v-headline>
          </v-col>
          <v-col fluid textCenter>
            <v-headline h3>C</v-headline>
          </v-col>
        </v-row>

        <h3>Some testing</h3>
        <p v-for="i in 9" :key="i+9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          In quae quam nemo, explicabo reprehenderit est labore ipsam
          eligendi cumque recusandae placeat nesciunt laudantium voluptate
          quaerat illo? Quidem quae fuga et!
        </p>
      </v-col>
    </v-row>

    <v-tabs fill>
      <v-tab @click="test">test 1</v-tab>
      <v-tab @click="test">test 2</v-tab>
    </v-tabs>

    <v-snackbar v-model="snackbar">Show Me</v-snackbar>

    <v-footer title="Logo" subtitle="Florian Woelki 2019">
      <v-divider short center />
      <v-container>
        <v-row>
          <v-col c4>
            <v-footer-list>
              <v-footer-list-item title>Test Title</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
            </v-footer-list>
          </v-col>
          <v-col c4>
            <v-footer-list>
              <v-footer-list-item title>Test Title</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
            </v-footer-list>
          </v-col>
          <v-col c4>
            <v-footer-list>
              <v-footer-list-item title>Test Title</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
              <v-footer-list-item>Test</v-footer-list-item>
            </v-footer-list>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelTest: '',
      snackbar: false,
    };
  },
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
