<template>
  <table class="table striped">
    <thead>
      <tr>
        <th v-for="header in headers" :key=header>{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <!-- TODO: Add mixins -->
      <tr v-for="prop in props" :key=prop[0]>
        <td>{{prop[0]}}</td>
        <td>{{prop[1]}}</td>
        <td>{{prop[2]}}</td>
        <td>{{prop[3]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      headers: ['Name', 'Default', 'Type', 'Description'],
      props: {
        onClick: ['onClick', 'null', 'Function', 'Button click event'],
        animated: ['animated', 'false', 'Boolean', 'Button click animation'],
        btnStyle: ['btnStyle', 'Empty', 'String', 'Button color'],
        xsmall: ['xsmall', 'false', 'Boolean', 'Button xsmall size'],
        small: ['small', 'false', 'Boolean', 'Button small size'],
        large: ['large', 'false', 'Boolean', 'Button large size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Button xlarge size'],
        loadingLeft: ['loadingLeft', 'false', 'Boolean', 'Loading left animation'],
        loadingRight: ['loadingRight', 'false', 'Boolean', 'Loading right animation'],
      },
    };
  },
};
</script>
