var expect = require('chai').expect;

var Backbone = require('backbone');

describe("bbjax", function () {
  it("should load bbjax to Backbone.ajax", function () {
    Backbone.ajax = require('../');
    expect(Backbone.ajax).to.exist;
    expect(typeof Backbone.ajax).to.equal("function");
  });
});