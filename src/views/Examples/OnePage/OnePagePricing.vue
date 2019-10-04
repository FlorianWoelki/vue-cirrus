<template>
  <v-container>
    <h2>Pricing</h2>
    <v-divider short />

    <v-row>
      <v-col c6>
        <v-card>
          <v-card-title>
            <v-row>
              <v-col c6>
                <p>Package 1</p>
              </v-col>
              <v-col c6>
                <h4 class="u-pull-right">$15.99</h4>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-content>
            <p>You will have the <b>following features:</b></p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </v-card-content>
          <v-card-actions>
            <v-row center>
              <v-btn link outline>Sign up for free</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col c6>
        <v-card>
          <v-card-title>
            <v-row>
              <v-col c6>
                <p>Package 2</p>
              </v-col>
              <v-col c6>
                <h4 class="u-pull-right">$25.99</h4>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-content>
            <p>You will have the <b>following features:</b></p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </v-card-content>
          <v-card-actions>
            <v-row center>
              <v-btn link>Sign up and buy</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
