<template>
  <table class="table striped">
    <thead>
      <tr>
        <th v-for="header in headers" :key=header>{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <!-- TODO: Add mixins -->
      <tr v-for="prop in props" :key=prop.name>
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
        accent: ['accent', 'false', 'Boolean', 'Accent fill color'],
        gray: ['gray', 'false', 'Boolean', 'Gray fill color'],
        black: ['black', 'false', 'Boolean', 'Black fill color'],
        value: ['v-model', 'false', 'Boolean', 'v-model for snackbar'],
        bottomLeft: ['bottomLeft', 'false', 'Boolean', 'Bottom Left position'],
        bottomRight: ['bottomRight', 'false', 'Boolean', 'Bottom Right position'],
        bottomCenter: ['bottomCenter', 'false', 'Boolean', 'Bottom Center position'],
        topLeft: ['topLeft', 'false', 'Boolean', 'Top Left position'],
        topRight: ['topRight', 'false', 'Boolean', 'Top Right position'],
        topCenter: ['topCenter', 'false', 'Boolean', 'Top Center position'],
      },
    };
  },
};
</script>
