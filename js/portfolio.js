const Money = require('./money')

class Portfolio {
    constructor(){
        this.moneys = []
    }
    add(...moneys){
        this.moneys = this.moneys.concat(moneys)
    }
    evaluate(currency){
        let total = this.moneys.reduce((sum, money) => {
            // chapter 8 - 新增 convert
            return sum + this.convert(money, currency)
        }, 0)
        return new Money(total, currency)
    }
    // chapter 8 - 新增 convert
    /*
    convert(money, currency){
        if(money.currency === currency){
            return money.amount
        }
        return money.amount * 1.2 
    }
    */
   // 1. 匯率是 hardcode 2. 匯率不依賴於貨幣  => 優化
    convert(money, currency){
        const eurToUsd = 1.2
        if(money.currency === currency){
            return money.amount
        }
        return money.amount * eurToUsd 
    }
}

module.exports = Portfolio