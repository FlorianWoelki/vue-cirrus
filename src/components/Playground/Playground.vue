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
            <v-dropdown-item @click="changeColor($event)">Primary</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Transparent</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Light</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Dark</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Black</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Info</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Link</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Success</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Warning</v-dropdown-item>
            <v-dropdown-item @click="changeColor($event)">Danger</v-dropdown-item>
          </v-dropdown>
          <v-checkbox @change="changeOutline">Outline</v-checkbox>
        </v-col>
        <v-col c4 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item @click="changeSize($event)">Tiny</v-dropdown-item>
            <v-dropdown-item @click="changeSize($event)">Small</v-dropdown-item>
            <v-dropdown-item @click="changeSize($event)">Normal</v-dropdown-item>
            <v-dropdown-item @click="changeSize($event)">Large</v-dropdown-item>
            <v-dropdown-item @click="changeSize($event)">xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c4 center>
          <v-radio-btn id="loadingLeft" @change="changeLoading($event)">Loading Left</v-radio-btn>
          <v-radio-btn id="loadingRight" @change="changeLoading($event)">Loading Right</v-radio-btn>
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

  methods: {
    changeOutline() {
      this.outline = !this.outline;
    },
    changeSize(event) {
      this.size = event.srcElement.innerHTML.toLowerCase();
    },
    changeColor(event) {
      this.color = event.srcElement.innerHTML.toLowerCase();
    },
    changeLoading(event) {
      this.loading = event.srcElement.id;
    },
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
