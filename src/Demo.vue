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
        <v-parallax-element :factor="1">
          <v-simple-card title="Card Title">
            <v-card-content>
              <v-toggler @change="test" dataCheckIcon="Y" dataUncheckIcon="N" error>test</v-toggler>
              <v-badge content="35">
                <span>test</span>
              </v-badge>
              <p>This is some basic simple card text</p>
              <a href="#">#vue-cirrus</a>
              <a href="#">#cirrus</a>
              <v-tag-container grouped>
                <v-tag primary>Hello</v-tag>
                <v-tag warning>My</v-tag>
                <v-tag black>World</v-tag>
              </v-tag-container>
            </v-card-content>
            <div class="card-footer level content">6:32 PM - 3 Jul 19</div>
            <v-card-buttons>
              <v-row center>
                <v-btn primary>Cancel</v-btn>
                <v-btn success>Save</v-btn>
                <v-btn link>Post</v-btn>
              </v-row>
            </v-card-buttons>
          </v-simple-card>
        </v-parallax-element>

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
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
