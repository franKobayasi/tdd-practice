const assert = require('assert')
// 1. Create Dollar class instance
const Dollar = require('./dollar')

const fiveDollar = new Dollar(5)
const tenDollar = fiveDollar.times(2)
const fifteenDollar = fiveDollar.times(3)

assert.strictEqual(tenDollar.amount, 10, '5 Dollar * 2 should equal 10 Dollar')
console.log('testing 5 Dollar * 2 should equal 10 Dollar passed')
assert.strictEqual(fifteenDollar.amount, 15, '5 Dollar * 3 should equal 15 Dollar')
console.log('testing 5 Dollar * 3 should equal 15 Dollar passed')
