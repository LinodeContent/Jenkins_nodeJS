var supertest = require("supertest");
var should = require("should");

// Port used.

var server = supertest.agent("http://localhost:9000");

// Unit Test


describe("Jenkins_nodeJS Unit Test",function(){

  // Test 1 - HTTP status
  it("Expect HTTP status 200",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

  // Test 2 - Control Test, Always TRUE
  it("Mocha Control Test - always pass",function(done){
      (1).should.be.exactly(1).and.be.a.Number();
	done();
  });


});
