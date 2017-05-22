QUnit.test("Random Value", function( assert ) {
    var result = randomValue(0, 100);
    assert.ok( result, "Passed!" );
});

