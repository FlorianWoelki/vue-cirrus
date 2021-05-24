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
    exp: /\.[^{]*/g,
    class: 'special-colored',
  },
  attributes: {
    exp: /\S+?(?=:)/g,
    class: 'special-attributes',
  },
};
