const requestOrig = require('request');
const Future = require('fluture');

const methods = [
  'get',
  'head',
  'options',
  'post',
  'put',
  'patch',
  'del',
  'delete',
];

const methodWrapper = (ctx, fn) =>
  arg =>
    new Promise((resolve, reject) => {
      fn.call(ctx, arg, (err, response) => {
        if (err) {
          reject(err);

          return;
        }

        resolve(response);
      });
    });

const requestF = Future.encaseP(methodWrapper(requestOrig, requestOrig.get));

methods.forEach((methodName) => {
  const fn = requestOrig[methodName];

  requestF[methodName] = Future.encaseP(methodWrapper(requestOrig, fn));
});

module.exports = Object.assign({
  requestF,
  requestOrig,
}, requestF);
