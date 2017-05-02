QUnit.test("Enemy was failed! ", function( assert ) {
    var result = battleFight(22, 11);
    assert.ok( result, "Passed!" );
});