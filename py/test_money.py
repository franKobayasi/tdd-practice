import unittest
# Step 03. Separating Our Code into Modules
from money import Money
from portfolio import Portfolio

class TestMoney(unittest.TestCase): 
        
    # def testMultiplicationInEuros(self): 
    #     tenEuros = Money(10, "EUR") 
    #     twentyEuros = tenEuros.times(2) 
    #     self.assertEqual(20, twentyEuros.amount)
    #     self.assertEqual("EUR", twentyEuros.currency)
        
    # def testMultiplicationInDollars(self):
    #     fiveDollars = Money(5, "USD")
    #     tenDollars = Money(10, "USD")
    #     self.assertEqual(tenDollars, fiveDollars.times(2))
    
    # # Step 05. Removing Redundancy in Tests
    def testMultiplication(self): 
        tenEuros = Money(10, "EUR") 
        twentyEuros = tenEuros.times(2) 
        self.assertEqual(20, twentyEuros.amount)
        self.assertEqual("EUR", twentyEuros.currency)
        
    def testDivision(self): 
        originalMoney = Money(4002, "KRW") 
        actualMoneyAfterDivision = originalMoney.divide(4)
        expectedMoneyAfterDivision = Money(1000.5, "KRW")
        
        self.assertEqual(expectedMoneyAfterDivision.amount, actualMoneyAfterDivision.amount)
        self.assertEqual(expectedMoneyAfterDivision.currency, actualMoneyAfterDivision.currency)
    
    def testAddition(self):
        fiveDollars = Money(5, "USD") 
        tenDollars = Money(10, "USD") 
        fifteenDollars = Money(15, "USD") 
        portfolio = Portfolio() 
        portfolio.add(fiveDollars, tenDollars)
        self.assertEqual(fifteenDollars, portfolio.evaluate("USD"))



if __name__ == '__main__': 
    unittest.main()