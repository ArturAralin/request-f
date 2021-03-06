const requestOrig = require('request');
const Future = require('fluture');
const { create, env } = require('sanctuary');
const { env: flutureEnv } = require('fluture-sanctuary-types');

const S = create({ checkTypes: true, env: env.concat(flutureEnv) });

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
    new Promise((resolve) => {
      fn.call(ctx, arg, (err, response) => {
        if (err) {
          resolve(S.Left(err));

          return;
        }

        resolve(S.Right(response));
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
