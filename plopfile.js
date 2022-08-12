const componentGenerator = require('./plop-generators/component');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
};
