const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const TupleFactory = require('../../src/factories/TupleFactory')
const Tuple = require('../../src/Tuple')

Given('{word} <- tuple {float}, {float}, {float}, {float}', function (
    tupleName,
    x,
    y,
    z,
    w
) {
    this[tupleName] = TupleFactory.createTuple(x, y, z, w)
})

Given('{word} <- point {float}, {float}, {float}', function (
    pointName,
    x,
    y,
    z
) {
    this[pointName] = TupleFactory.createPoint(x, y, z)
})

Given('v <- vector {float}, {float}, {float}', function (x, y, z) {
    this.v = TupleFactory.createVector(x, y, z)
})

Then('p = tuple {float}, {float}, {float}, {float}', function (x, y, z, w) {
    const tuplesAssertion = Tuple.equalsTo(
        this.p,
        TupleFactory.createTuple(x, y, z, w)
    )

    assert.ok(tuplesAssertion)
})

Then('a.x = {float}', function (float) {
    assert.strictEqual(this.a.x, float)
})

Then('v = tuple {float}, {float}, {float}, {float}', function (x, y, z, w) {
    const tuplesAssertion = Tuple.equalsTo(
        this.v,
        TupleFactory.createTuple(x, y, z, w)
    )

    assert.ok(tuplesAssertion)
})

Then('a.y = {float}', function (float) {
    assert.strictEqual(this.a.y, float)
})

Then('a.z = {float}', function (float) {
    assert.strictEqual(this.a.z, float)
})

Then('a.w = {float}', function (float) {
    assert.strictEqual(this.a.w, float)
})

Then('a is a point', function () {
    assert.strictEqual(this.a.getKind(), 'Point')
})

Then('a is not a vector', function () {
    assert.notStrictEqual(this.a.getKind(), 'Vector')
})

Then('{word} plus {word} = tuple {float} {float} {float} {float}', function (
    tuple1,
    tuple2,
    x,
    y,
    z,
    w
) {
    const newTuple = Tuple.add(this[tuple1], this[tuple2])
    const expectedTuple = TupleFactory.createTuple(x, y, z, w)

    assert.ok(Tuple.equalsTo(newTuple, expectedTuple))
})

Then('{word} minus {word} <- vector {float}, {float}, {float}', function (
    point1,
    point2,
    x,
    y,
    z
) {
    const newPoint = Tuple.subtract(this[point1], this[point2])
    const expectedVector = TupleFactory.createVector(x, y, z)

    assert.ok(Tuple.equalsTo(newPoint, expectedVector))
})
