<template>
  <div :class=classes>
    <div class="header-brand">
      <div v-if="title != ''" class="nav-item no-hover">
        <a :href=brandLink>
          <h6 class="title">{{title}}</h6>
        </a>
      </div>
      <div
        v-if=!disableMobileNavbar
        class="nav-item nav-btn"
        id="header-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      class="header-nav"
      id="header-menu"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    brandLink: {
      type: String,
      default: '!#',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    disableMobileNavbar: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    if (!this.disableMobileNavbar) {
      const headerBtn = document.getElementById('header-btn');

      headerBtn.addEventListener('click', () => {
        if (document.getElementById('header-menu').classList.contains('active')) {
          document.getElementById('header-menu').classList.remove('active');
          document.querySelector('.nav-btn').classList.remove('active');
          // document.querySelector('#header').classList.remove('translucent');
        } else {
          document.getElementById('header-menu').classList.add('active');
          document.querySelector('.nav-btn').classList.add('active');
          // document.querySelector('#header').classList.add('translucent');
        }
      });
    }
  },

  computed: {
    classes() {
      return {
        header: true,
        'header-fixed': this.fixed,
        'header-dark': this.dark,
        'header-clear': this.clear,
      };
    },
  },
};
</script>
