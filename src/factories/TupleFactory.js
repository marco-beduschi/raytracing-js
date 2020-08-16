const Vector = require('../Vector')
const Point = require('../Point')

const createTuple = (x, y, z, w) => {
    if (w === 0) {
        return new Vector(x, y, z)
    } else {
        return new Point(x, y, z, w)
    }
}

module.exports.createTuple = createTuple
