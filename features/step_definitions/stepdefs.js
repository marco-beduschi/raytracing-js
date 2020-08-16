const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const TupleFactory = require('../../src/factories/TupleFactory')

Given('a <- tuple {float}, {float}, {float}, {float}', function (x, y, z, w) {
    this.a = TupleFactory.createTuple(x, y, z, w)
})

Then('a.x = {float}', function (float) {
    assert.equal(this.a.x, float)
})

Then('a.y = {float}', function (float) {
    assert.equal(this.a.y, float)
})

Then('a.z = {float}', function (float) {
    assert.equal(this.a.z, float)
})

Then('a.w = {float}', function (float) {
    assert.equal(this.a.w, float)
})

Then('a is a point', function () {
    assert.equal(this.a.constructor.name, 'Point')
})

Then('a is not a vector', function () {
    assert.notEqual(this.a.constructor.name, 'Vector')
})
