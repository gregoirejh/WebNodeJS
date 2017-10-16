var should = require('should')
var user = require('../lib/user.js')
	
describe('user', function() {
  
  it('saves properly', function(done) {
    user.save("ok", "pwd", function(err) {
      should.not.exist(err);
      done();
    })
  })
 
  it('doesn\'t save because missing parameter', function(done) {
    user.save("only name", function(err) {
      should.exist(err);
      done();
    })
  })
  
  it('gets properly', function(done) {
    user.get("name", function(err) {
      should.not.exist(err);
      done();
    })
  })
})
