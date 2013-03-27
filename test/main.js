// Generated by CoffeeScript 1.4.0
(function() {
  var nearestNeighbor, should;

  should = require("should");

  nearestNeighbor = require("../lib/main");

  describe("K Nearest Neighbor", function() {
    return describe("number of arguments", function() {
      it("should be at least 2", function() {
        (function() {
          return nearestNeighbor();
        }).should.throwError("Expecting at least 2 arguments");
        return (function() {
          return nearestNeighbor(1);
        }).should.throwError("Expecting at least 2 arguments");
      });
      return it("should accept 2 or 3", function() {
        (function() {
          return nearestNeighbor(1, 2);
        }).should.not.throwError();
        return (function() {
          return nearestNeighbor(1, 2, 3);
        }).should.not.throwError();
      });
    });
  });

}).call(this);
