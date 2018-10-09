const utils = require('loader-utils');
const ejs = require('ejs')

module.exports = function (source) {
  this.cacheable && this.cacheable();
  const query = utils.getOptions(this);
  const options = query.data;
  const reg = /\/\* ejs\n[\s\S]*?\*\/\n/g;

  options.client = true;
  options.compileDebug = false;
  
  source = source.replace(reg, function ($0) {
    return $0.substring(7, $0.length - 3);
  });

  let template = ejs.compile(source, options);
  return template(options);
};
