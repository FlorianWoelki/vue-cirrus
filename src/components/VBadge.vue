<template>
  <div :id="'badge-' + content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '0',
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: true,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'gray',
    },
    primary: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    const node = document.getElementById(`badge-${this.content}`);

    const spanChild = node.children[0];
    if (spanChild) {
      spanChild.classList.add('badge');
      if (this.left) {
        spanChild.classList.add('left');
      } else if (this.right) {
        spanChild.classList.add('right');
      }

      if (this.bottom) {
        spanChild.classList.add('bottom');
      }

      if (this.primary) {
        spanChild.classList.add('primary-badge');
      } else if (this.info) {
        spanChild.classList.add('info-badge');
      } else if (this.link) {
        spanChild.classList.add('link-badge');
      } else if (this.dark) {
        spanChild.classList.add('dark-badge');
      } else if (this.success) {
        spanChild.classList.add('success-badge');
      } else if (this.warning) {
        spanChild.classList.add('warning-badge');
      } else if (this.danger) {
        spanChild.classList.add('danger-badge');
      } else if (this.light) {
        spanChild.classList.add('light-badge');
      }

      spanChild.setAttribute('data-badge', this.content);
    }
  },
};
</script>

<style>
.badge {
  position:relative;
}

.badge[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  font-size: .65em;
  background: #fefefe;
  color: #737373;
  border-color: #d9d9d9;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 1px #333;
}
.badge.primary-badge[data-badge]:after {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.badge.info-badge[data-badge]:after {
  background: #2972fa;
  color: #fff;
  border-color: #205BC8;
}
.badge.link-badge[data-badge]:after {
  background: #5e5cc7;
  color: #fff;
  border-color: #4B499F;
}
.badge.dark-badge[data-badge]:after {
  background: #363636;
  color: #fff;
  border-color: #2B2B2B;
}
.badge.success-badge[data-badge]:after {
  background: #0dd157;
  color: #fff;
  border-color: #0AA746;
}
.badge.warning-badge[data-badge]:after {
  background: #fab633;
  color: #fff;
  border-color: #C89028;
}
.badge.danger-badge[data-badge]:after {
  background: #fb4143;
  color: #fff;
  border-color: #C83436;
}
.badge.light-badge[data-badge]:after {
  background: #f6f9fc;
  color: #000;
  border-color: #C4C7C9;
}

.badge.right[data-badge]:after {
  top: -10px;
  right: -20px;
}

.badge.left[data-badge]:after {
  top: -10px;
  left: -20px;
}
.badge.left.bottom[data-badge]:after {
  top: 10px;
  left: -20px;
}
.badge.right.bottom[data-badge]:after {
  top: 10px;
  right: -20px;
}
</style>
