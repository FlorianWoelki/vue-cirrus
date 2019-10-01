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

        <v-dropdown>
          <template v-slot:button><v-dropdown-btn primary>Test</v-dropdown-btn></template>
          <v-dropdown-item @click="test">Hello</v-dropdown-item>
          <v-dropdown-item>my</v-dropdown-item>
          <v-dropdown-item>World</v-dropdown-item>
        </v-dropdown>

        <v-input-field
          v-model="modelTest"
          placeholder="Hello World"
          title="Testing Title"
          :subtitle="modelTest"
          icon
        >
          <span class="icon">123</span>
        </v-input-field>

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

    <v-snackbar v-model="snackbar">Show Me</v-snackbar>
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
