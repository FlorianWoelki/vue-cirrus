<template>
  <div class="demo">
    <v-sidebar>
      <v-sidebar-items title="Hello" hoverEffect>
        <v-sidebar-item></v-sidebar-item>
        <v-sidebar-item link="html">HTML</v-sidebar-item>
        <v-sidebar-item link="css">CSS</v-sidebar-item>
        <v-sidebar-item link="js">JS</v-sidebar-item>
        <v-sidebar-item link="c">C</v-sidebar-item>
        <v-sidebar-item>
          <v-sidebar-dropdown title="Mixins">
            <v-sidebar-item dropdown>a</v-sidebar-item>
            <v-sidebar-item dropdown>b</v-sidebar-item>
            <v-sidebar-item dropdown>c</v-sidebar-item>
          </v-sidebar-dropdown>
        </v-sidebar-item>
      </v-sidebar-items>
      <v-sidebar-content>
        <div class="content">
          <v-row v-for="i in 3" :key=i>
            <v-col c6>
              <v-code :lang="'html-' + i" copyable>
                <pre v-html="code"></pre>
              </v-code>
            </v-col>
            <v-col c6>
              <h2>testest</h2>
            </v-col>
          </v-row>

          <!--
          <v-input-field
            title="Email Adress"
            subtitle="Enter your email adress here"
            subtitleInline
            placeholder="Test input field"
            infoText="We won't spam!!!"
          ></v-input-field>
          <v-text-area placeholder="I'm a text area"></v-text-area>

          <v-form-group>
            <v-label>$</v-label>
            <v-input-field noControl placeholder="Test input field"></v-input-field>
            <v-btn :onClick="() => { snackbar = !snackbar; }">Go</v-btn>
          </v-form-group>
          <v-snackbar lightgray bottomCenter v-model="snackbar">Colored Snackbar!</v-snackbar>
          -->
        </div>
      </v-sidebar-content>
    </v-sidebar>

    <v-spinner backgroundColor="#000" fillColor="red" />

    <!--
    <v-btn :onClick="() => { snackbar = !snackbar; }">Click to snack!</v-btn>
    <v-snackbar topLeft v-model="snackbar">Testing</v-snackbar>
    -->
    <!--
    <v-footer title="Hello World" subtitle="Hello"></v-footer>
    -->
    <!--
    <v-row>
      <v-col c4 o4>
        <v-dropdown>
          <template v-slot:dropdownBtn>
            <v-dropdown-btn>Hello!</v-dropdown-btn>
          </template>
          <v-dropdown-item>
            Google Chrome
          </v-dropdown-item>
          <v-dropdown-item>
            Firefox
          </v-dropdown-item>
          <v-dropdown-item>
            IE
          </v-dropdown-item>
        </v-dropdown>
      </v-col>
    </v-row>
    -->

    <!--
    <v-parallax src="https://www.w3schools.com/w3css/img_lights.jpg">
      <h1 class="white uppercase">Test</h1>
    </v-parallax>
    -->

    <!--
    <v-row>
      <v-col c5 o4>
        <v-frame>
          <v-frame-header>
            <v-avatar text="FW"></v-avatar>
            <p class="text-center frame-title">Florian Woelki</p>
            <p class="text-center frame-subtitle">Youngest Thing on the earth</p>
            <v-tabs fill>
              <v-tab>Favorites</v-tab>
              <v-tab selected>Profile</v-tab>
              <v-tab>Pins</v-tab>
            </v-tabs>
          </v-frame-header>
          <v-frame-body>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
          </v-frame-body>
          <v-frame-footer>
            <v-divider />
            <p>~ Something like a footer</p>
          </v-frame-footer>
        </v-frame>
      </v-col>
    </v-row>
    -->
    <!--
    <v-navbar title="Logo" fixed>
      <div class="nav-left">
        <v-nav-dropdown>
          <template v-slot:title><i>Dropdown</i></template>
          <v-nav-dropdown-item>Test 1</v-nav-dropdown-item>
          <v-nav-dropdown-item>Test 2</v-nav-dropdown-item>
          <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
        </v-nav-dropdown>
      </div>

      <div class="nav-right">
        <v-navbar-item selected>Selected</v-navbar-item>
        <v-navbar-item>Link 1</v-navbar-item>

        <v-nav-dropdown animated>
          <template v-slot:title><b>Dropdown</b></template>
          <v-nav-dropdown-item><h1>Test 1</h1></v-nav-dropdown-item>
          <v-nav-dropdown-item><b>Test 2</b></v-nav-dropdown-item>
          <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
        </v-nav-dropdown>

        <v-nav-dropdown clickable dropdownId="clickable-dropdown">
          <template v-slot:title><u>Dropdown</u></template>
          <v-nav-dropdown-item>Test 3</v-nav-dropdown-item>
          <v-nav-dropdown-item>Test 4</v-nav-dropdown-item>
          <v-nav-dropdown-item>Test 5</v-nav-dropdown-item>
        </v-nav-dropdown>
      </div>
    </v-navbar>
    <section class="padtop">
      <v-space xlarge />
      <div class="content">
        <h3>Lorem Ipsum</h3>

        <v-code lang="java" keywords="int,float" copyable>
          <pre>System.out.println("integrated World");</pre>
          <pre>int test = 0;</pre>
          <pre>int hello = 1;</pre>
          <pre>float a = 1;</pre>
          <pre>System.out.println("Hello World");</pre>

          <pre>console.log('Testing');</pre>
        </v-code>

        <v-code lang="console" keywords="npm" copyable>
          <pre>npm install --save vue-cirrus</pre>
        </v-code>

        <v-space xlarge />
        <v-row>
          <v-col c6 o2>
            <v-simple-card title="Test Title">
              <v-card-content>
                <p>This is some sample text spam spam spam spam spam spam spam.
                <a href="#">#place</a><a href="#">#holder</a><a href="#">@Cirrus</a></p>
              </v-card-content>
              <div class="card-footer level content">6:32 PM - 3 Jul 18</div>
              <v-card-buttons center>
                <button class="btn">Cancel</button>
                <button class="btn">Save</button>
                <button class="btn">Post</button>
              </v-card-buttons>
            </v-simple-card>
          </v-col>
        </v-row>
        <v-space xlarge />

        <v-space xlarge />
        <v-row>
          <v-col c6>
            <v-tile>
              <v-tile-icon>
                <v-avatar text="FW" />
              </v-tile-icon>

              <v-tile-content
                title="Robert Downey Jr just poked you."
                subtitle="Poke him back or view on facebook."
                info="6 seconds ago"
              />

              <v-tile-buttons>
                <v-btn btnStyle="transparent">XXX</v-btn>
              </v-tile-buttons>
            </v-tile>
          </v-col>
          <v-col c6>
            <v-tile>
              <v-tile-icon>
                <v-avatar text="DT" />
              </v-tile-icon>

              <v-tile-content
                title="Polarity.exe"
                subtitle="953KB / 1.1MB - 3 seconds..."
              />

              <v-tile-buttons>
                <v-btn btnStyle="transparent">XXX</v-btn>
              </v-tile-buttons>
            </v-tile>
          </v-col>
        </v-row>
        <v-col c6>
          <v-tile>
            <v-tile-icon>
              <v-avatar text="SD" />
            </v-tile-icon>

            <v-tile-content
              title="Meeting Scheduled"
              subtitle="You have a scheduled meeting in 1 hour."
            />

            <v-tile-buttons>
              <v-btn btnStyle="accent">A</v-btn>
              <v-btn>X</v-btn>
            </v-tile-buttons>
          </v-tile>
        </v-col>
        <v-space xlarge />

        <div class="divider"></div>
        <p v-for="n in 10" :key=n>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Minus sequi ab quae repudiandae consequuntur iusto,
          voluptas doloremque aperiam facilis quaerat aliquid,
          neque consequatur dolorum architecto quasi quos explicabo consectetur? Non.
        </p>
      </div>
    </section>


    <div class="content">
      <v-next-prev nextText="Next Text" prevText="Previous Text" center></v-next-prev>
    </div>
    -->

    <!--
    <v-sidebar>
      <v-sidebar-items title="Hello" hoverEffect>
        <v-sidebar-item>Web</v-sidebar-item>
        <v-sidebar-item>HTML</v-sidebar-item>
        <v-sidebar-item>CSS</v-sidebar-item>
      </v-sidebar-items>
      <v-sidebar-content>
        <h3>Test</h3>
        <div class="divider"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam, neque at provident voluptatibus ipsa libero quaerat ad
          sed voluptas sequi quas iusto optio beatae, obcaecati
          repudiandae expedita ullam accusamus fugiat?
        </p>

        <v-toast>Testing</v-toast>

        <v-btn :onClick="() => { snackbar = !snackbar; }">Show snackbar</v-btn>
        <v-snackbar right v-model="snackbar">
          This is a usefull snackbar :)
        </v-snackbar>
      </v-sidebar-content>
    </v-sidebar>
    -->

    <!--
    <v-tabs>
      <v-tab>Test 1</v-tab>
      <v-tab link="#">Test 2</v-tab>
      <v-tab>Test 3</v-tab>
      <v-tab selected>Test 4</v-tab>
    </v-tabs>

    <v-row>
      <v-col c4>
        <v-card animated title="Title" subtitle="Subtitle" footerText="Footer text">
          <v-card-content>
            <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
          </v-card-content>
        </v-card>
      </v-col>

      <v-col c4>
        <v-min-card title="Google Chrome">
          <p>Hello here is some text for this card wrapped inside a link.</p>
        </v-min-card>
      </v-col>
    </v-row>

    <v-avatar large text="fw"></v-avatar>

    <v-row>
      <v-col c4>
        <v-btn animated center tooltipText="Hello World" tooltipBottomLeft>Animated button</v-btn>
      </v-col>
      <v-col c4>
        <v-btn animated btnStyle="accent">Animated accent button</v-btn>
      </v-col>
      <v-col c4>
        <v-btn animated loadingLeft>Loading Button</v-btn>
      </v-col>
    </v-row>

    <v-btn-group filled>
      <v-btn btnStyle="accent">First</v-btn>
      <v-btn btnStyle="accent">Second</v-btn>
      <v-btn btnStyle="accent">Third</v-btn>
    </v-btn-group>

    <v-row>
      <v-col c2>
        <v-link>Ordinary Link</v-link>
      </v-col>
      <v-col c2>
        <v-link ltr>Hover Link</v-link>
      </v-col>
      <v-col c2>
        <v-link squared>Squared Link</v-link>
      </v-col>
      <v-col c2>
        <v-link dSquared>Delayed Squared Link</v-link>
      </v-col>
      <v-col c2>
        <v-link c>Center Link</v-link>
      </v-col>
      <v-col c2>
        <v-link oc>Opposite Center Link</v-link>
      </v-col>
    </v-row>

    <v-code lang="java" keywords="int,float">
      System.out.println("integrated World");
      int test = 0;
      int hello = 1;
      float a = 1;
      System.out.println("Hello World");

      console.log('Testing');
    </v-code>

    <a href="#modal">
      <v-btn>Modal Dialog</v-btn>
    </a>
    <v-modal large zoomOut>
      <v-modal-body>
        <h6>Hello Modal Dialog</h6>
      </v-modal-body>
      <v-modal-footer>
        <v-btn pullLeft>Close</v-btn>
        <v-btn pullRight btnStyle="accent">Share</v-btn>
      </v-modal-footer>
    </v-modal>

    <v-toast tooltipText="Hello">Testing</v-toast>
    -->
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
    };
  },
};
</script>
