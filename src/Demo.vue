<template>
  <div class="demo">
    <v-container>
      <v-row>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ea delectus ullam aut? Veritatis cum earum eaque atque quam inventore,
          praesentium accusamus quibusdam laborum veniam odio, amet unde. Quod,
          totam dignissimos?
        </p>
        <v-code dark lang="html">
          <h1>test</h1><br />
          <h6
            class="test-title"
            name="Title"
          >tiel</h6> <br />
          <v-btn accent>test</v-btn>
        </v-code>
        <v-drop-caps letterColor="purple">
          Lorem ipsum dolor sit,
          amet consectetur adipisicing elit.
          Quasi rerum voluptates ad soluta doloribus natus,
          unde ipsa vel officia excepturi incidunt quidem
          ipsum consequatur? Nisi totam dolorem a fugit itaque.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Temporibus molestiae eveniet tempore nihil, error facere?
          Possimus quod atque unde ea tempore, deserunt quo voluptates
          minus, repudiandae commodi fuga placeat optio?
        </v-drop-caps>
        <v-search-bar
          v-model=searchingWord
          :searchAction=click
        >Search Me</v-search-bar>
        <v-code dark lang="javascript">function(test) {
  console.log("Hello World");
  if (true) {
    // print something out
    console.log("Helo World");
  }
}</v-code>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ea delectus ullam aut? Veritatis cum earum eaque atque quam inventore,
          praesentium accusamus quibusdam laborum veniam odio, amet unde. Quod,
          totam dignissimos?
        </p>
        <v-code dark lang="css">html {
  color: #fff;
  background-color: dark;
}

.hello {
  cursor: pointer;
  font-family: 'Arial';
}</v-code>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      snackbar: false,
      code: `<xmp><div>Helo World</div>
<h1 class="Hello World">Hello World</h1></xmp>`,
      searchingWord: '',
    };
  },
  methods: {
    click() {
      console.log('Searching...', this.searchingWord);
    },
  },
};
</script>
