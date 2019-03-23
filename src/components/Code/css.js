export default {
  stringDoubleQuotes: {
    exp: /"(.*?)"/g,
    class: 'string',
  },
  stringSingleQuotes: {
    exp: /'(.*?)'/g,
    class: 'string',
  },
  classes: {
    exp: /\.\w*/g,
    class: 'special-js',
  },
  css: {
    exp: /.+?(?={)/g,
    class: 'special-html',
  },
};
