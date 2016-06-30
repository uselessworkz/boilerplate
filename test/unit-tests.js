var assert = chai.assert;

describe('HelloWorld Test', function() {
    it('should check that the script global exists', function() {
        var globalvar = !!helloworld;
        assert.equal(globalvar, true);
    });
});
