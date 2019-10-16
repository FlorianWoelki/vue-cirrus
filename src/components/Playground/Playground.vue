<template>
  <v-container>
    <div class="title-section" v-if="!noTitle">
      <h3>Playground</h3>
      <v-space xlarge />
    </div>

    <div class="playground-card">
      <v-tabs fill style="margin-bottom: 25px; margin-top: 5px;">
        <v-tab
          :href="href"
          :selected="!codeSelected"
          @click="() => { codeSelected = false }"
        >
          <i class="fas fa-globe fa-lg"></i>
        </v-tab>
        <v-tab
          :href="href"
          :selected="codeSelected"
          @click="() => { codeSelected = true }"
        >
          <i class="fas fa-code fa-lg"></i>
        </v-tab>
      </v-tabs>

      <div class="card-content">
        <PlaygroundComponent
          v-if="!codeSelected"
          :outline="outline"
          :color="color"
          :size="size"
          :loading="loading"
        />
        <CodeComponent
          v-if="codeSelected"
          :outline="outline"
          :color="color"
          :size="size"
          :loading="loading"
        />
      </div>
    </div>

    <div class="display-view">
      <v-space />

      <v-row>
        <v-col c4 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Primary</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Transparent</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Light</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Dark</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Black</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Success</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Warning</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { color = event.srcElement.innerHTML.toLowerCase() }"
            >Danger</v-dropdown-item>
          </v-dropdown>
          <v-checkbox @change="() => { outline = !outline }">Outline</v-checkbox>
        </v-col>
        <v-col c4 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { size = event.srcElement.innerHTML.toLowerCase() }"
            >Tiny</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { size = event.srcElement.innerHTML.toLowerCase() }"
            >Small</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { size = event.srcElement.innerHTML.toLowerCase() }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { size = event.srcElement.innerHTML.toLowerCase() }"
            >Large</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { size = event.srcElement.innerHTML.toLowerCase() }"
            >xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c4 center>
          <v-radio-btn
            id="loadingLeft"
            @change="(event) => { loading = event.srcElement.id }"
          >Loading Left</v-radio-btn>
          <v-radio-btn
            id="loadingRight"
            @change="(event) => { loading = event.srcElement.id }"
          >Loading Right</v-radio-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import PlaygroundComponent from '@/components/Playground/DisplayView/PlaygroundComponent.vue';
import CodeComponent from '@/components/Playground/DisplayView/CodeComponent.vue';

export default {
  data() {
    return {
      codeSelected: false,
      outline: false,
      color: 'none',
      size: 'none',
      loading: 'none',
    };
  },

  props: {
    noTitle: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '/#/testplayground/#!',
    },
  },

  components: {
    PlaygroundComponent,
    CodeComponent,
  },
};
</script>

<style>
.playground-card {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  backface-visibility: hidden;
  box-shadow: 0 5px 12px 0 rgba(42, 51, 83, .12), 0 0 5px rgba(0, 0, 0, .06);
  margin-bottom: 1rem;
}

.playground-card .card-content {
  padding: 1.5rem;
}
</style>
