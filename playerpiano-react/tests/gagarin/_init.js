
var Promise = require('es6-promise').Promise;
var expect = require('chai').expect;
var path = require('path');

describe('Initializing app', function () {
  var server = meteor({});
  var client = browser(server);

  it('should be ok', function () {
    return Promise.resolve('should be ok');
  });
  it('Expect true to equal true...', function () {
    expect(true).to.equal(true);
  });
});
