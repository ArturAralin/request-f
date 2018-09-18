const chai = require('chai');
chai.use(require('chai-as-promised'));
const randomInt = require('random-int');
const S = require('sanctuary');
const requestF = require('../index');
const {
  server,
  host,
} = require('./static-server');

const { expect } = chai;

const METHODS = [
  'get',
  'head',
  'options',
  'post',
  'put',
  'patch',
  'del',
  'delete',
];

describe('requestF tests', () => {
  before((done) => {
    server.start(done);
  });

  after(() => {
    server.stop();
  });


  describe('any success query', () => {
    let result;

    before(async () => {
      const index = randomInt(0, 7);
      const methodName = METHODS[index];

      result = await requestF[methodName](host).promise();
    });

    it('result should be a Right', () =>
      expect(S.isRight(result))
        .to.be.true);

    it('should have property body', () =>
      expect(result)
        .to.have.nested.property('value.body')
        .that.to.be.a('String'));

    it('should have property statusCode', () =>
      expect(result)
        .to.have.nested.property('value.statusCode')
        .that.to.be.a('Number'));

    it('should have property headers', () =>
      expect(result)
        .to.have.nested.property('value.headers')
        .that.to.be.a('Object'));

    it('should have property request', () =>
      expect(result)
        .to.have.nested.property('value.request')
        .that.to.be.a('Object'));

    it('should have property request.uri', () =>
      expect(result)
        .to.have.nested.property('value.request.uri')
        .that.to.be.a('Object'));

    it('should have property request.method', () =>
      expect(result)
        .to.have.nested.property('value.request.method')
        .that.to.be.a('String'));

    it('should have property request.headers', () =>
      expect(result)
        .to.have.nested.property('value.request.headers')
        .that.to.be.a('Object'));
  });

  describe('failing query', () => {
    let error;

    before(() => {
      error = requestF.get('invalid.host').promise().catch(err => err);
    });

    it('shoul be a Left', async () =>
      expect(S.isLeft(await error)).to.be.true);
  });
});
