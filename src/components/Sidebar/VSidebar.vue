<template>
  <div :class="[
    'tree-nav-body',
    {
      'dark': this.dark,
    },
  ]">
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

    <div
      id="sidebar"
      class="tree-nav"
      :style="styleSidebar()"
    >
      <div class="content">
        <slot name="title"></slot>
      </div>
      <div class="tree-nav-container">
        <div class="tree">
          <slot></slot>
        </div>
      </div>
    </div>
    <a
      href="#sidebar-close"
      id="sidebar-close"
      class="tree-nav-close"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: {
      type: Boolean,
      default: false,
    },
    hoverEffect: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  beforeCreate() {
    document.body.className = 'sidebar';
  },

  methods: {
    styleSidebar() {
      return {
        padding: this.noPadding ? 0 : null,
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
  color: #f03d4d;
  background-color: #efefef;
}
.dark #sidebar .hover-effect.tree-item:hover {
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  color: #f03d4d;
  background-color: #272727;
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
