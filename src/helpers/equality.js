const EPSILON = 0.00001

const equal = (a, b) => {
    return Math.abs(a - b) < EPSILON ? true : false
}

module.exports = { equal: equal }
