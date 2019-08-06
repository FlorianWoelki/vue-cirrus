<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <img
          :src=imgSrc
          class="level"
          :id=imgId
        />
        <p
          :id=projectName
          class="title level"
        >{{title}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: 'https://maxcdn.icons8.com/Share/icon/Logos//chrome1600.png',
    },
    imgId: {
      type: String,
      default: 'projectlogo',
    },
    projectName: {
      type: String,
      default: 'projectname',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
