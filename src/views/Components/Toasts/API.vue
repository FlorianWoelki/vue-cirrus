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
        success: ['success', 'false', 'Boolean', 'Success colored toast'],
        warning: ['warning', 'false', 'Boolean', 'Warning colored toast'],
        error: ['error', 'false', 'Boolean', 'Error colored toast'],
        closable: ['closable', 'false', 'Boolean', 'Closable icon in the top right'],
      },
    };
  },
};
</script>
