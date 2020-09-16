const Tuple = require('../Tuple')

const createTuple = (x, y, z, w) => {
    return new Tuple(x, y, z, w)
}

const createPoint = (x, y, z) => {
    return new Tuple(x, y, z, 1.0)
}

const createVector = (x, y, z) => {
    return new Tuple(x, y, z, 0)
}

module.exports.createTuple = createTuple
module.exports.createPoint = createPoint
module.exports.createVector = createVector
