'use strict';

module.exports = function(options) {
  var options = arguments;
  return function*(next) {
    yield combo(this.req, this.res, options);
    yield next;
  };
};

function combo(req, res, options){
  return function(callback){
    require('./combo').apply(this, options)(req, res, callback);
  };
}
