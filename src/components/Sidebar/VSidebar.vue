<template>
  <div :class="classes">
    <div class="tree-nav-header">
      <a
        href="#sidebar"
        class="u-hide-tablet"
      >
        <span class="icon">
          <div class="sidebar-icon-container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </span>
      </a>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },

  beforeCreate() {
    document.body.className = 'sidebar';
  },

  computed: {
    classes() {
      return {
        'tree-nav-body': true,
        dark: this.dark,
      };
    },
  },
};
</script>

<style>
body.sidebar {
  overflow-y: hidden;
}

#sidebar {
  background-color: rgb(250, 250, 250);
}
#sidebar {
  border-right: 1px solid rgb(220, 220, 220);
}

#sidebar .hover-effect.tree-item:hover {
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  background-color: #efefef;
  border-radius: 5px;
}
.dark #sidebar .hover-effect.tree-item:hover {
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  background-color: #272727;
  border-radius: 5px;
}

#sidebar .sidebar-link {
  backface-visibility: initial;
  text-decoration: initial;
  transition: none;
  color: initial;
  padding: 0;
  font-weight: 600;
  font-size: .95rem;
  color: #374054;
}

#sidebar .content {
  margin: 0 0.4em 1.5em;
}

.dark #sidebar {
  background-color: #111;
  border-right-color: #272727 !important;
  color: white;
}

.dark #sidebar .tree-nav-container .tree .tree-item a {
  color: white;
}

.hide-desktop .icon {
  display: initial;
}

.sidebar-menu-container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
</style>
