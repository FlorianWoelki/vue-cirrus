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
    class: 'special-colored',
  },
  attributes: {
    exp: /.+?(?=:)/g,
    class: 'special-attributes',
  },
  css: {
    exp: /.+?(?={)/g,
    class: 'special-html',
  },
};
