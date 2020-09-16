const { equal } = require('./helpers/equality')

class Tuple {
    constructor(x, y, z, w) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    static add = (tuple1, tuple2) => {
        return new Tuple(
            tuple1.x + tuple2.x,
            tuple1.y + tuple2.y,
            tuple1.z + tuple2.z,
            tuple1.w + tuple2.w
        )
    }

    static subtract = (tuple1, tuple2) => {
        return new Tuple(
            tuple1.x - tuple2.x,
            tuple1.y - tuple2.y,
            tuple1.z - tuple2.z,
            tuple1.w - tuple2.w
        )
    }

    static equalsTo = (tuple1, tuple2) => {
        return (
            equal(tuple1.x, tuple2.x) &&
            equal(tuple1.y, tuple2.y) &&
            equal(tuple1.z, tuple2.z) &&
            equal(tuple1.w, tuple2.w)
        )
    }

    getKind = () => {
        return this.w === 0 ? 'Vector' : 'Point'
    }
}

module.exports = Tuple
