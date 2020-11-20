<template>
  <v-container>
    <div class="u-text-center">
      <h2>Pricing</h2>
      <v-divider class="u-center" short />
    </div>

    <v-space />

    <v-row>
      <v-col c="6">
        <v-card>
          <v-card-title>
            <v-container class="u-flex u-items-center u-justify-space-between">
              <p>Package 1</p>
              <h4>$15.99</h4>
            </v-container>
          </v-card-title>
          <v-container>
            <p>You will have the <b>following features:</b></p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </v-container>
          <v-card-actions>
            <div class="mt-1 mb-1 u-center">
              <v-btn color="link" outline>Sign up for free</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col c="6">
        <v-card>
          <v-card-title>
            <v-container class="u-flex u-items-center u-justify-space-between">
              <p>Package 2</p>
              <h4>$25.99</h4>
            </v-container>
          </v-card-title>
          <v-container>
            <p>You will have the <b>following features:</b></p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </v-container>

          <v-card-actions>
            <div class="mt-1 mb-1 u-center">
              <v-btn color="link">Sign up and buy</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
