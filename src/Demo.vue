<template>
  <div class="demo">
    <v-navbar>
      <template v-slot:brandTitle>Hello World</template>
      <v-nav-region left>
        <v-navbar-item>test</v-navbar-item>
        <v-navbar-item>test</v-navbar-item>
      </v-nav-region>
    </v-navbar>
    <v-space></v-space>
    <v-divider></v-divider>
    <v-space></v-space>
    <v-code lang="bash"><br />yarn install vue-cirrus</v-code>
    <v-row center>
      <v-col c6>
        <v-card dark>
          <v-card-title>test</v-card-title>
          <v-card-content>
            <v-avatar src="assets/logo.png"></v-avatar>
            <p>This is some basic simple card text</p>
            <a href="#">#vue-cirrus</a>
            <a href="#">#cirrus</a>
          </v-card-content>

          <v-card-footer>6:32 PM - 3 Jul 19</v-card-footer>
        </v-card>

        <v-date-picker dark></v-date-picker>

        <v-text-area dark placeholder="Type your text here ..."></v-text-area>

        <v-input-field
          dark
          title="Title"
          subtitle="Subtitle"
          infoText="Info text"
          placeholder="Hello World"
        >
        </v-input-field>

        <a href="#modal">
          <v-btn primary>Open Modal</v-btn>
        </a>
        <v-modal dark large zoomOut>
          <v-modal-body>
            <p>Hello Modal Dialog Hello Modal Dialog</p>
          </v-modal-body>
          <v-modal-footer style="padding-bottom: 80px">
            <v-btn pullLeft>Close</v-btn>
            <v-btn pullRight primary>Share</v-btn>
          </v-modal-footer>
        </v-modal>

        <v-space />

        <v-tile dark enableBoxShadow>
          <v-tile-icon>
            <v-avatar text="FW" />
          </v-tile-icon>

          <v-tile-content
            title="Robert Downey Jr just poked you."
            subtitle="Poke him back or view on facebook."
            info="6 seconds ago"
          />

          <v-tile-buttons>
            <v-btn link>Share</v-btn>
          </v-tile-buttons>
        </v-tile>

        <v-space />

        <v-code dark lang="JavaScript" copyable><br />import gui
import asdfmovie
        </v-code>

        <v-pagination bordered dark>
          <v-pagination-item disabled>prev</v-pagination-item>
          <v-pagination-item selected>1</v-pagination-item>
          <v-pagination-item>2</v-pagination-item>
          <v-pagination-item>next</v-pagination-item>
        </v-pagination>

        <v-checkbox dark>test</v-checkbox>

        <v-dropdown dark>
          <template v-slot:button>
            <v-dropdown-btn>Test</v-dropdown-btn>
          </template>
          <v-dropdown-item>111</v-dropdown-item>
          <v-dropdown-item>222</v-dropdown-item>
          <v-dropdown-item>333</v-dropdown-item>
        </v-dropdown>

        <v-next-prev>
          <v-prev-btn prevText="Prev">Previous</v-prev-btn>
          <v-next-btn nextText="Next" @click="test">NEEXT</v-next-btn>
        </v-next-prev>

        <v-row center>
          <v-col c6>
            <v-frame dark>
              <v-frame-header textCenter>
                <v-avatar text="FW" />
                <v-frame-title>Florian Woelki</v-frame-title>
                <v-frame-subtitle>Creator</v-frame-subtitle>
              </v-frame-header>

              <v-divider dark noMargin />

              <v-frame-body>
                <v-container noPadding>
                  <p class="u-text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro maiores molestiae, blanditiis maxime perspiciatis error
                  nisi consectetur quasi nemo impedit numquam eligendi ratione
                  nobis qui voluptatum et quod minus aut.</p>
                </v-container>
              </v-frame-body>

              <v-divider dark noMargin />

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
            dark
            pilled
            noControl
            placeholder="Hello World"
          >
          </v-input-field>
          <v-btn primary outline>test</v-btn>
        </v-form-group>

        <v-search-bar dark placeholder="Suchen ...">test</v-search-bar>

        <v-row center>
          <v-col fluid textCenter>
            <v-headline dark h3>A</v-headline>
          </v-col>
          <v-col fluid textCenter>
            <v-headline dark h3>B</v-headline>
          </v-col>
          <v-col fluid textCenter>
            <v-headline dark h3>C</v-headline>
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

    <v-tabs fill dark>
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

<style>
/*
.demo {
  background-color: #121212;
}
*/
</style>
