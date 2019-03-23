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
  attributes: {
    exp: /.+?(?=:)/g,
    class: 'special-sql',
  },
  css: {
    exp: /.+?(?={)/g,
    class: 'special-html',
  },
};
