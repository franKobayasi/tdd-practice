const assert = require('assert')
const Money = require('./money')
const Portfolio = require('./portfolio')
// Chapter 1. Create Dollar class instance
// Chapter 2. Replace Dollar with money to keep it DRY

const fiveDollar = new Money(5)
const tenDollar = fiveDollar.times(2)
const fifteenDollar = fiveDollar.times(3)

assert.strictEqual(tenDollar.amount, 10, '5 Dollar * 2 should equal 10 Dollar')
console.log('testing 5 Dollar * 2 should equal 10 Dollar passed')
assert.strictEqual(fifteenDollar.amount, 15, '5 Dollar * 3 should equal 15 Dollar')
console.log('testing 5 Dollar * 3 should equal 15 Dollar passed')

// Chapter 2. Create Money Class instance for different currency
let tenEuros = new Money(10, 'EUR')
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20)
console.log('testing 10 EUR * 2 should equal 20 EUR passed')
assert.strictEqual(twentyEuros.currency, 'EUR')
console.log('testing currency should be EUR passed')

// Chapter 2. Divide and Conquer
let originalMoney = new Money(4002, 'KRW')
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, 'KRW')
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)
console.log('testing divide function passed')

// Chapter 3. 相加兩個不同匯率的 Money 物件，因此新增 instance 來處理此問題
let fifteenDollars = new Money(15, 'USD')
let portfolio = new Portfolio()
portfolio.add(fiveDollar, tenDollar)
assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars)
console.log('testing adding two dollar passed')



